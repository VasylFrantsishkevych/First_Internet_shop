const {statusCode} = require("../constants");
const jwt = require("jsonwebtoken");

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(statusCode.UNAUTHORIZED).json({message: 'НЕ авторизований'})
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(statusCode.FORBIDDEN).json({message: 'Немає доступу'})
            }
            req.user = decoded;
            next();
        } catch (e) {
            res.status(statusCode.UNAUTHORIZED).json({message: 'НЕ авторизований'})
        }
    }
}