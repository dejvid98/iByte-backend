const express = require('express')
const router = express.Router()
const { register, login, updateUser } = require('../controllers/AuthController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/update').put(updateUser)

module.exports = router
