const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler')

// Middleware
app.use(express.json())
app.use(bodyParser.json());

// Routes
app.use('/api', routes)

// Error handling
app.use(errorHandler)

module.exports = app