/* eslint-env mocha */
const { createContainer, asValue } = require('awilix')
const should = require('should')
const request = require('supertest')
const server = require('../server/server')
const models = require('../models')
const services = require('../services')

describe('Booking API', () => {
  let app = null

  const serverSettings = {
    port: 3001
  }

  let testRepo = {
    makeBooking (user, booking) {
      return Promise.resolve('booking made successfully')
    },
    getOrderById (orderId) {
      return Promise.resolve('orderId: ' + orderId)
    }
  }

  beforeEach(() => {
    const container = createContainer()

    container.register({
      validate: asValue(models.validate),
      order: asValue(models.order),
      user: asValue(models.user),
      serverSettings: asValue(serverSettings),
      paymentService: asValue(services.paymentService),
      repo: asValue(testRepo)
    })

    return server.start(container)
      .then(serv => {
        app = serv
      })
  })

  afterEach(() => {
    app.close()
    app = null
  })

  it('should create order', (done) => {
    const user = {
      name: 'pawan',
      lastName: 'Test',
      email: 'cristiano@nupp.com',
      creditCard: {
        number: '1111222233334444',
        cvc: '123',
        exp_month: '07',
        exp_year: '2017'
      },
      membership: '7777888899990000'
    }

    const order = {
      totalAmount: '71',
      deliveryAddress: 'test address',
      highlights: 'test',
      seller: 'Amit',
      color: 'blue',
      productId: '1233363322',
      quantity: '3',
      schedule: '1553999999999'
    }

    request(app)
      .post('/booking')
      .send({ user: user, order: order })
      .expect((res) => {
        res.body.should.containEql({
          status: 'Confirmed'
        })
      })
      .expect(200, done)
  })
  it('should cancel order', (done) => {
    request(app)
      .post('/orders/' + 1 + '/cancel')
      .expect((res) => {
        res.body.should.containEql({
          status: 'Cancelled'
        })
      })
      .expect(200, done)
  })

  it('should return order status', (done) => {
    request(app)
      .post('/orders/' + 1)
      .expect((res) => {
        res.body.should.containEql({
          status: 'Cancelled'
        })
      })
      .expect(200, done)
  })
})
