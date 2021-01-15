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
        console.log(query)

        res.send(results)
    } catch (err) {
        console.log(err)
    }
}
