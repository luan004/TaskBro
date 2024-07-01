function errorHandler(err, req, res, next) {
    console.error(err.stack)
    res.status(500).json({
        status: 'fail',
        message: err.message
    })
}

module.exports = errorHandler