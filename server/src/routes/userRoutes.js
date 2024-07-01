const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.get('/auth', userController.authenticateUser)

module.exports = router