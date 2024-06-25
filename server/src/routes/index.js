const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json(
        {
            message: 'Online!'
        }
    )
})

router.use('/user', require('./userRoutes'))

module.exports = router