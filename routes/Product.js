const express = require('express')
const router = express.Router()
const { findProductsById, findProductById, getProductReviews, searchProducts, createOrder, getUserOrders, itemsById, createReview } = require('../controllers/ProductController')

router.route('/').post(findProductsById)
router.route('/:id').get(findProductById)
router.route('/reviews/:id').get(getProductReviews)
router.route('/review').post(createReview)
router.route('/search/:query').get(searchProducts)
router.route('/order/:id').get(getUserOrders)
router.route('/order').post(createOrder)
router.route('/multiplebyid/:id').get(itemsById)

module.exports = router
