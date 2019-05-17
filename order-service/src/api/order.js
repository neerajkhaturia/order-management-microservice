'use strict'
const status = require('http-status')

module.exports = ({ repo }, app) => {
  /**
   * Create order API: Valid user and order objects are required. After validation, payment service is 
   * called to process the payment.
   */
  app.post('/orders', (req, res, next) => {
    const validate = req.container.cradle.validate
    const paymentService = req.container.resolve('paymentService')

    Promise.all([
      validate(req.body.user, 'user'),
      validate(req.body.order, 'order')
    ])
      .then(([user, order]) => {
        const payment = {
          userName: user.name + ' ' + user.lastName,
          currency: 'mxn',
          number: user.creditCard.number,
          cvc: user.creditCard.cvc,
          exp_month: user.creditCard.exp_month,
          exp_year: user.creditCard.exp_year,
          amount: order.totalAmount,
          description: `
            Payment for order id ${order.productId},
            with quantity ${order.quantity.toString()}
            at time ${order.schedule}`
        }

        return Promise.all([
          paymentService(payment),
          Promise.resolve(user),
          Promise.resolve(order)
        ])
      })
      .then(([payment, user, order]) => {
        return Promise.all([
          repo.createOrder(user, order, payment),
          Promise.resolve(payment),
          Promise.resolve(user)
        ])
      })
      .then((order) => {
        res.status(status.OK).json(order)
      })
      .catch(next)
  })
  /**
   * Cancel Order API: This route sets the status of order to 'cancelled'.
   * Note: Cancel order is valid only for orders which are in created or confirmed states.
   */
  app.post('/orders/:id/cancel', (req, res, next) => {
    const params = req.params
    Promise.all([
      repo.cancelOrder(params.id)
        .then(() => {
          let response = {
            success: true,
            msg: 'Order cancelled',
            orderId: params.id
          }
          res.status(status.OK).json(response)
        })
        .catch(next)
    ])
  })
  /**
   * Check Order status API: Thi route return the order detials along with status correponsing to orderId.
   */
  app.get('/orders/:id', (req, res, next) => {
    const params = req.params
    Promise.all([
      repo.getOrderStatusById(params.id)
        .then((order) => {
          let response = {
            success: true,
            msg: order ? 'Order details' : 'Order does not found',
            order: order
          }
          res.status(status.OK).json(response)
        })
        .catch((next) => {
          let errorResponse = {
            success: false,
            msg: 'Something went wrong!'
          }
          res.status(500).json(errorResponse)
        })
    ])
  })
}
