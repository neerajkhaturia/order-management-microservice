'use strict'
const repository = (container) => {
  const {database: db} = container.cradle

  const makePurchase = (payment) => {
    return new Promise((resolve, reject) => {
      if (payment) {
        if (payment.cvc && payment.cvc === 123) {
          const paid = Object.assign({}, {
            status: 'Confirmed',
            user: payment.userName,
            amount: payment.amount
          })
          resolve(paid)
        } else {
          const declined = Object.assign({}, {
            status: 'Cancelled',
            user: payment.userName,
            amount: payment.amount
          })
          resolve(declined)
        }
      } else {
        reject(new Error('An error occuered procesing payment'))
      }
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    makePurchase,
    disconnect
  })
}

const connect = (container) => {
  return new Promise((resolve, reject) => {
    if (!container.resolve('database')) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(container))
  })
}

module.exports = Object.assign({}, {connect})

