const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body
        
        let user = await User.findOne({ where: { user } })
        if (user) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        user = await User.create({ username, password: hashedPassword })

        res.status(201).json(
            {
                username: user.username
            }
        )
    }
    catch (err) {
        res.status(500).json(
            {
                message: err.message
            }
        )
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        
        const user = await User.findOne({ where: { username } })
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' })
        }

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid password' })
        }

        res.status(200).json(
            {
                token: 'TOKEN_HERE'
            }
        )
    }
    catch (err) {
        res.status(500).json(
            {
                message: err.message
            }
        )
    }
}