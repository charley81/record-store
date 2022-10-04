const express = require('express')
const router = express.Router()
const upload = require('../utils/multer')
const {
  allProducts,
  createNew,
  newForm,
  showProduct,
  seedStarter,
  clearSeedStarter
} = require('../controllers/product-controller')

// get all products
router.get('/', allProducts)

// get new form
router.get('/new', newForm)

// create a new product
router.post('/', upload.single('image'), createNew)

// get product seed
router.get('/seed', seedStarter)

// clear product seed
router.get('/clear', clearSeedStarter)

// show a single product
router.get('/:id', showProduct)

module.exports = router
