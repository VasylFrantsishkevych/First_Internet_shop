const {apiError} = require("../error");

const {statusCode} = require("../constants");
module.exports = function (err, req, res, next) {
    if (err instanceof apiError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(statusCode.INTERNAL).json({message: 'Непередбачувана помилка!'})
}