const express = require('express')
const router = express.Router()
const { findProductsById, findProductById, getProductReviews, searchProducts } = require('../controllers/ProductController')

router.route('/').post(findProductsById)
router.route('/:id').get(findProductById)
router.route('/reviews/:id').get(getProductReviews)
router.route('/search/:query').get(searchProducts)

module.exports = router
