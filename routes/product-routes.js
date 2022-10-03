const express = require('express')
const router = express.Router()
const { allProducts } = require('../controllers/product-controller')

router.get('/', allProducts)

module.exports = router
