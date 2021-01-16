const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
})

const review = mongoose.model('review', reviewSchema)

module.exports = review
