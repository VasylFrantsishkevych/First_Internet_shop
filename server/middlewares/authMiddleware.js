const {statusCode} = require("../constants");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(statusCode.UNAUTHORIZED).json({message: 'НЕ авторизований'})
        }

        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next();
    } catch (e) {
        res.status(statusCode.UNAUTHORIZED).json({message: 'НЕ авторизований'})
    }
}
