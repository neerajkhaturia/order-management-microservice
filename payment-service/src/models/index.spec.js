/* eslint-env mocha */
const { validate } = require('./')

console.log(Object.getPrototypeOf(validate))

describe('Schemas Validation', () => {
  it('can validate a user object', (done) => {
    const testPayment = {
      userName: 'Test User 1',
      currency: 'INR',
      number: '9898923',
      cvc: '123',
      exp_month: '12',
      exp_year: '2017',
      amount: 71,
      description: ` Test Payment `
    }

    validate(testPayment, 'payment')
      .then(value => {
        console.log('validated')
        console.log(value)
        done()
      })
      .catch(err => {
        console.log(err)
        done()
      })
  })
})
