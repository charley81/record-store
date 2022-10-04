const express = require('express')
const router = express.Router()
const upload = require('../utils/multer')
const {
  allProducts,
  createNew,
  newForm,
  showProduct
} = require('../controllers/product-controller')

// get all products
router.get('/', allProducts)

// get new form
router.get('/new', newForm)

// create a new product
router.post('/', upload.single('image'), createNew)

// show a single product
router.get('/:id', showProduct)

module.exports = router
