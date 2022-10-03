const productModel = require('../models/product-model')
const cloudinary = require('../utils/cloudinary')

const allProducts = (req, res) => {
  res.send('index page')
}

module.exports = {
  allProducts
}
