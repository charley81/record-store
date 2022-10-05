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

// @desc get a form to create a product
// @route GET /products/new
// @access public
const newForm = (req, res) => {
  res.render('products/New')
}

// @desc post a new product
// @route POST /products
// @access public
const createNew = async (req, res) => {
  try {
    if (req.file) {
      await cloudinary.uploader.upload(req.file.path)
    }

    const result = req.file
      ? await cloudinary.uploader.upload(req.file.path)
      : null

    const product = new productModel({
      artist: req.body.artist,
      title: req.body.title,
      genre: req.body.genre,
      quantity: req.body.quantity,
      description: req.body.description,
      image: result?.secure_url || '/images/soon.jpeg',
      cloudinary_id: result?.public_id
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

// @desc clear the seed data
// @route GET /products/clear
// @access public
const clearSeedStarter = (req, res) => {
  productModel.deleteMany({}, (error, deletedProducts) => {
    if (error) {
      res.status(400).json(error)
    } else {
      res.status(200)
      res.redirect('/products')
    }
  })
}

// @desc delete a product
// @route DELETE /products/:id
// access public
const deleteProduct = async (req, res) => {
  try {
    // find user by id
    let product = await productModel.findById(req.params.id)

    // delete image from cloudinary
    if (product.cloudinary_id) {
      await cloudinary.uploader.destroy(product.cloudinary_id)
    }

    // delete product from database
    await product.remove()
    res.redirect('/products')
  } catch (error) {
    console.log(error)
  }
}

// @desc form to edit product
// @route GET /products/:id/edit
// @access public
const editForm = (req, res) => {
  productModel.findById(req.params.id, (error, foundProduct) => {
    if (error) {
      res.status(400).json(err)
    } else {
      res.status(200)
      res.render('products/Edit', { product: foundProduct })
    }
  })
}

// @desc form
const updateProduct = async (req, res) => {
  try {
    let product = await productModel.findById(req.params.id)

    if (req.file) {
      await cloudinary.uploader.destroy(product.cloudinary_id)
    }

    const result = req.file
      ? await cloudinary.uploader.upload(req.file.path)
      : null

    // new obj with updated data
    const updatedProduct = {
      artist: req.body.name || product.name,
      title: req.body.title || product.title,
      quantity: req.body.quantity || product.quantity,
      description: req.body.description || product.description,
      genre: req.body.genre || product.genre,
      image: result?.secure_url || product.image,
      cloudinary_id: result?.public_id || product.cloudinary_id
    }

    // update product in database
    product = await productModel.findByIdAndUpdate(
      req.params.id,
      updatedProduct,
      { new: true }
    )

    res.status(200)
    res.redirect(`/products/${req.params.id}`)
  } catch (error) {
    console.log(error)
  }
}

const updateQuantity = async (req, res) => {
  try {
    // find the product
    let product = await productModel.findById(req.params.id)

    // new obj with updated data
    const updatedProduct = {
      artist: product.name,
      title: product.title,
      quantity: product.quantity - 1,
      description: product.description,
      genre: product.genre,
      image: product.image,
      cloudinary_id: product.cloudinary_id
    }

    // update product in database
    product = await productModel.findByIdAndUpdate(
      req.params.id,
      updatedProduct,
      { new: false }
    )

    res.status(200)
    res.redirect(`/products/${req.params.id}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  allProducts,
  createNew,
  newForm,
  showProduct,
  seedStarter,
  clearSeedStarter,
  deleteProduct,
  editForm,
  updateProduct,
  updateQuantity
}
