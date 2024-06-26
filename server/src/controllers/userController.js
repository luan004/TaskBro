const { User } = require('../models')
const bcrypt = require('bcrypt')
const asyncHandler = require('../middleware/asyncHandler')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

exports.registerUser = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username } })
    if (user) {
        return res.sendStatus(409)
    }

    if (password.length < 8) {
        return res.sendStatus(400)
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        username,
        password: hashedPassword,
    })

    res.status(201).json({
        username: newUser.username,
    })
})

exports.loginUser = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username } })
    if (!user) {
        return res.sendStatus(401)
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return res.sendStatus(401)
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
        },
        JWT_SECRET,
        {
            expiresIn: '1h',
        }
    )

    res.status(200).json({
        token
    })
})