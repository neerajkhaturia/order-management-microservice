/* eslint-env mocha */
const { createContainer, asValue } = require('awilix')
const should = require('should')
const request = require('supertest')
const models = require('../models')
const server = require('../server/server')

describe('Payment API', () => {
  let app = null

  const serverSettings = {
    port: 3000
  }

  const container = createContainer()

  container.register({
    validate: asValue(models.validate),
    serverSettings: asValue(serverSettings)
  })

  beforeEach(() => {
    return server.start(container)
      .then(serv => {
        app = serv
      })
  })

  afterEach(() => {
    app.close()
    app = null
  })

  it('can make a purchase', (done) => {
    const testPayment = {
      userName: 'Cristian Ramirez',
      currency: 'mxn',
      number: '4242424242424242',
      cvc: '123',
      exp_month: '12',
      exp_year: '2017',
      amount: 71,
      description: `test payment`
    }

    request(app)
      .post('/payment/makePurchase')
      .send({ paymentOrder: testPayment })
      .expect((res) => {
        should.ok(res.body.paid)
      })
      .expect(200, done)
  })
})
