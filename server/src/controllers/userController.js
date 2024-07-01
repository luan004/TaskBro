const { User } = require('../models')
const bcrypt = require('bcrypt')
const asyncHandler = require('../middleware/asyncHandler')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

exports.registerUser = asyncHandler(async (req, res, next) => {
    let { name, username, password } = req.body

    let errors = []

    // username validation
    username = username.trim()
    const user = await User.findOne({ where: { username } })
    if (user) {
        errors.push({
            field: 'username',
            message: 'Usuário já existe.'
        })
    }
    if (!username || username.length < 3 || username.length > 32) {
        errors.push({
            field: 'username',
            message: 'Usuário deve ter entre 3 e 32 caracteres.'
        })
    }
    if (!/^[a-zA-Z0-9._-]+$/.test(username)) {
        errors.push({
            field: 'username',
            message: 'Usuário deve conter apenas letras, números, pontos, traços e underlines.'
        })
    }

    // name validation
    name = name.trim()
    if (!name || name.length < 3 || name.length > 255) {
        errors.push({
            field: 'name',
            message: 'Nome deve ter entre 3 e 255 caracteres.'
        })
    }
    if (!/^[a-zA-Z çÇ]+$/.test(name)) {
        errors.push({
            field: 'name',
            message: 'Nome deve conter apenas letras e espaços.'
        })
    }

    // password validation
    if (!password || password.length < 8 || password.length > 32) {
        errors.push({
            field: 'password',
            message: 'Senha deve ter entre 8 e 32 caracteres.'
        })
    }

    if (errors.length > 0) {
        return res.status(400).json({
            status: 'fail',
            errors
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({
        name,
        username,
        password: hashedPassword,
    })

    res.status(201).json({
        status: 'success'
    })
})

exports.loginUser = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username } })
    if (!user) {
        return res.status(401).json({
            status: 'fail',
            message: 'Usuário ou senha incorretos.'
        })
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return res.status(401).json({
            status: 'fail',
            message: 'Usuário ou senha incorretos.'
        })
    }

    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            username: user.username,
        },
        JWT_SECRET,
        {
            expiresIn: '1h',
        }
    )

    res.status(200).json({
        status: 'success',
        token
    })
})

exports.authenticateUser = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)

    res.status(200).json({
        status: 'success',
        data: decoded
    })
})