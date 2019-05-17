/* eslint-env mocha */
const supertest = require('supertest')

describe('Order Service: ', (app) => {
  const api = supertest('http://127.0.0.1:3001')
  const now = new Date()
  now.setDate(now.getDate() + 1)
  const user = {
    name: 'Amit',
    lastName: 'Renu',
    email: 'test@test.com',
    creditCard: {
      number: '4242424242424242',
      cvc: '123',
      exp_month: '12',
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
  it('create order', (done) => {
    api.post('/orders')
      .send({
        user: user,
        order: order
      })
      .expect((res) => {
        console.log('res.body', res.body)
      })
      .expect(200, done())
  })
})
