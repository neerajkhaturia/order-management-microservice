'use strict'
const { orderProcessParameters } = require('../config/config')
const repository = (container) => {
  const { database: db } = container.cradle
  const cancelOrder = (orderId) => {
    return new Promise((resolve, reject) => {
      var query = {
        $and: [
          {
            $or: [
              {
                status: 'Created'
              },
              {
                status: 'Confirmed'
              }
            ]
          },
          {
            productId: parseInt(orderId)
          }
        ]
      }
      var newvalues = { $set: { status: 'Cancelled' } }
      db.collection('order').updateOne(query, newvalues, function (err, res) {
        if (err) {
          reject(new Error('Error while updating order with productid err:' + err))
        }
        db.close()
        resolve()
      })
    })
  }

  const createOrder = (user, order, payment) => {
    return new Promise((resolve, reject) => {
      const payload = {
        totalAmount: order.totalAmount,
        deliveryAddress: order.deliveryAddress,
        highlights: order.highlights,
        seller: order.seller,
        color: order.color,
        productId: order.productId,
        quantity: order.quantity,
        schedule: order.schedule,
        status: payment.status
      }
      db.collection('order').insertOne(payload, (err) => {
        if (err) {
          reject(new Error('An error occuered while creating order err:' + err))
        }
        if (payment.status === 'Payment Accepted') {
          setTimeout(function () {
            updateOrder(order.productId, 'Delivered')
          }, orderProcessParameters.millisecondToDeleverOrder)
        }
        resolve(payload)
      })
    })
  }

  const getOrderStatusById = (orderId) => {
    return new Promise((resolve, reject) => {
      const query = {
        productId: parseInt(orderId)
      }
      db.collection('order').findOne(query, function (err, result) {
        if (err) {
          reject(new Error('An error occuered while fetching order with id, err:' + err))
        }
        db.close()
        resolve(result)
      })
    })
  }
  const updateOrder = (orderId, status) => {
    var query = {
      $and: [
        {
          status: 'Payment Accepted'
        },
        {
          productId: parseInt(orderId)
        }
      ]
    }
    var newvalues = { $set: { status: status } }
    db.collection('order').updateOne(query, newvalues, function (err, res) {
      if (err) {
        console.log('Error while updating order with productid err:' + err)
      } else {
        console.log('Order status is changed to delivered for order id ', orderId)
      }
      db.close()
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    createOrder,
    cancelOrder,
    getOrderStatusById,
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

module.exports = Object.assign({}, { connect })
