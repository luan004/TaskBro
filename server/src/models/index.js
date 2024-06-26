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

const User = require('./user')(sequelize, Sequelize)

sequelize.sync()
    .then(() => {
        console.log('Database synced')
    })
    .catch(err => {
        console.error('Unable to sync database:', err)
    })

module.exports = {
    User,
    sequelize
}