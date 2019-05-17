const orderSchema = (joi) => ({
  totalAmount: joi.number(),
  deliveryAddress: joi.string(),
  highlights: joi.string(),
  seller: joi.string(),
  color: joi.string(),
  productId: joi.number(),
  quantity: joi.number(),
  schedule: joi.date().min('now')
})

module.exports = orderSchema
