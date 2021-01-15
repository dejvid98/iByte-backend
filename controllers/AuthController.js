const userModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const { email, password, firstName, lastName, username, address, phoneNumber } = req.body

        let doesExist = await userModel.findOne({ email })

        if (doesExist) {
            res.status(400).json({ error: 'User already exists!' })
            throw new Error('User already exists!')
        }

        const user = new userModel({
            email,
            password,
            firstName,
            lastName,
            username,
            address,
            phoneNumber,
        })

        const salt = await bcrypt.genSalt(4)

        user.password = await bcrypt.hash(password, salt)

        await user.save()

        const payload = {
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            },
        }

        jwt.sign(payload, 'secretTokenz', { expiresIn: 36000 }, (err, token) => {
            if (err) res.json({ err })

            res.json({ token })
        })
    } catch (err) {
        console.log(err)
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userInfo = await userModel.findOne({ email }).lean()

        if (!userInfo) {
            res.status(400).json({ error: 'User not found!' })
            throw new Error('User not found!')
        }

        bcrypt.compare(password, userInfo.password, (error, result) => {
            if (result) {
                delete userInfo.password

                jwt.sign({ userInfo }, 'secretTokenz', (err, token) => {
                    if (err) res.json({ err })
                    res.json({ token })
                })
            } else {
                res.json({ error })
                throw new Error(error)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
