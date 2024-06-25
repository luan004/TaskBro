require('dotenv').config()

module.exports = {
    dev: {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS || null,
        data: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dial: 'mysql'
    }
}