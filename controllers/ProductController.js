const mongoose = require('mongoose')
const Cpu = require('../models/CpuModel')
const Gpu = require('../models/GpuModel')
const Laptop = require('../models/LaptopModel')
const Phone = require('../models/PhoneModel')
const Motherboard = require('../models/MotherboardModel')
const Powersupply = require('../models/PowersupplyModel')
const Ram = require('../models/RamModel')
const Ssd = require('../models/SsdModel')
const Tv = require('../models/TvModel')
const Product = require('../models/ReviewModel')
const Order = require('../models/OrderModel')
const Review = require('../models/ReviewModel')

exports.findProductById = async (req, res) => {
    try {
        const { id } = req.params
        const collections = [Cpu, Gpu, Laptop, Phone, Motherboard, Powersupply, Ram, Ssd, Tv]

        collections.forEach(async collection => {
            const resp = await collection.findById(id)
            if (resp !== null) res.send(resp)
        })
    } catch (err) {
        console.log(err)
    }
}

exports.findProductsById = async (req, res) => {
    try {
        const { ids } = req.body
        const collections = [Cpu, Gpu, Laptop, Phone, Motherboard, Powersupply, Ram, Ssd, Tv]
        let results = []

        const formatedIds = ids.map(id => mongoose.Types.ObjectId(id))

        await Promise.all(
            collections.map(async collection => {
                try {
                    const resp = await collection.find({
                        _id: {
                            $in: formatedIds,
                        },
                    })
                    if (resp.length > 0) results = [...results, ...resp]
                } catch (error) {
                    console.log('error' + error)
                }
            })
        )

        res.send(results)
    } catch (err) {
        console.log(err)
    }
}

exports.getProductReviews = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Product.find({ productId: id })

        res.send(data)
    } catch (err) {
        console.log(err)
    }
}

exports.searchProducts = async (req, res) => {
    try {
        const { query } = req.params
        const collections = [Cpu, Gpu, Laptop, Phone, Motherboard, Powersupply, Ram, Ssd, Tv]
        let results = []

        await Promise.all(
            collections.map(async collection => {
                try {
                    const resp = await collection.find({
                        model: { $regex: '.*' + query + '.*', $options: 'i' },
                    })
                    if (resp.length > 0) results = [...results, ...resp]
                } catch (error) {
                    console.log('error' + error)
                }
            })
        )

        res.send(results)
    } catch (err) {
        console.log(err)
    }
}

exports.createOrder = async (req, res) => {
    try {
        const { userId, items } = req.body
        const newOrder = await Order.create({ userId, items, orderDate: new Date() })
        await newOrder.save()
    } catch (err) {
        console.log(err)
    }
}

exports.getUserOrders = async (req, res) => {
    try {
        const { id } = req.params
        const orders = await Order.find({ userId: id })
        res.send(orders)
    } catch (err) {
        console.log(err)
    }
}

exports.itemsById = async (req, res) => {
    try {
        const { id } = req.params
        const collections = [Cpu, Gpu, Laptop, Phone, Motherboard, Powersupply, Ram, Ssd, Tv]
        const order = await Order.findOne({ _id: id })

        let results = []

        await Promise.all(
            collections.map(async collection => {
                try {
                    await Promise.all(
                        order.items.map(async id => {
                            try {
                                const resp = await collection.findById(id)
                                if (resp !== null) results.push(resp)
                            } catch (error) {
                                console.log('error' + error)
                            }
                        })
                    )
                } catch (error) {
                    console.log('error' + error)
                }
            })
        )

        res.send(results)
    } catch (err) {
        console.log(err)
    }
}

exports.createReview = async (req, res) => {
    try {
        const { productId, username, rating, comment } = req.body
        const review = await Review.create({ productId, username, rating, comment })
        await review.save()

        res.send('Review successfully written!')
    } catch (err) {
        console.log(err)
    }
}
