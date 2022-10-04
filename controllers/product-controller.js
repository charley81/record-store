const productModel = require('../models/product-model')
const cloudinary = require('../utils/cloudinary')
const productSeed = require('../models/product-seed')

// @desc get all the products
// @route GET /products
// @access public
const allProducts = (req, res) => {
  productModel.find({}, (error, items) => {
    if (error) {
      res.status(400).json(error)
    } else {
      res.status(200)
      res.render('products/Index', { products: items })
    }
  })
}

// @desc post a new product
// @route POST /products
// @access public
const createNew = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)

    const product = new productModel({
      artist: req.body.artist,
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
        res.redirect('/products')
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

// @desc show a single product
// @route GET /products/:id
// @access public
const showProduct = (req, res) => {
  productModel.findById(req.params.id, (error, item) => {
    if (error) {
      res.status(400).json(error)
    } else {
      res.status(200)
      res.render('products/Show', { product: item })
    }
  })
}

// @desc get seed data for products
// @route GET /products/seed
// @access public
const seedStarter = (req, res) => {
  productModel.deleteMany({}, (error, deletedProducts) => {
    if (error) {
      res.status(400).json(error)
    } else {
      productModel.create(productSeed, (error, createdProducts) => {
        if (error) {
          res.status(400).json(error)
        } else {
          res.status(200)
          res.redirect('/products')
        }
      })
    }
  })
}

module.exports = {
  allProducts,
  createNew,
  newForm,
  showProduct,
  seedStarter
}
