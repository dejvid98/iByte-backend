const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
})

const order = mongoose.model('order', orderSchema)

module.exports = order
