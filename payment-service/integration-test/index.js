/* eslint-env mocha */
const supertest = require('supertest')

describe('Payment Servie', () => {
  const api = supertest('http://127.0.0.1:3000')
  const testPayment = {
    userName: 'Test User',
    currency: 'mxn',
    number: '4242424242424242',
    cvc: '123',
    exp_month: '12',
    exp_year: '2017',
    amount: 71,
    description: ` Test Payment`
  }

  it('can make a paymentOrder', (done) => {
    api.post('/payment/makePurchase')
      .send({ paymentOrder: testPayment })
      .expect((res) => {
        console.log(res.body)
      })
      .expect(200, done)
  })
})
