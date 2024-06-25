const { Sequelize } = require('sequelize')
const config = require('../../config/config')

const sequelize = new Sequelize(
    config.dev.data,
    config.dev.user,
    config.dev.pass,
    {
        host: config.dev.host,
        dialect: config.dev.dial
    }
)

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))

module.exports = sequelize