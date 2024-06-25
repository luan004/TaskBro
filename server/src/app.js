const express = require('express')
const app = express()
const routes = require('./routes')
const sequelize = require('./models/index')
const dotenv = require('dotenv')


// Middleware
app.use(express.json())

// Routes
app.use('/api', routes)

// Sync database
sequelize.sync()
    .then(() => {
        console.log('Database synced')
    })

module.exports = app