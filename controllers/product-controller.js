const productModel = require('../models/product-model')
const cloudinary = require('../utils/cloudinary')

// @desc get all the products
// @route GET /products
// @access public
const allProducts = (req, res) => {
  res.json({ message: 'index page' })
}

// @desc post a new product
// @route POST /products
// @access public
const createNew = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)

    const product = new productModel({
      title: req.body.title,
      genre: req.body.genre,
      quantity: req.body.quantity,
      description: req.body.description,
      image: result.secure_url,
      cloudinary_id: result.public_id
    })

    productModel.create(product, (error, item) => {
      if (error) {
        res.status(400).json(error)
      } else {
        res.status(200)
        res.json({ message: 'image created in db' })
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// @desc get a form to create a product
// @route GET /products/new
// @access public
const newForm = (req, res) => {
  res.render('products/New')
}

module.exports = {
  allProducts,
  createNew,
  newForm
}
