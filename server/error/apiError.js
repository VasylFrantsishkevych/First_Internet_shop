const {statusCode} = require("../constants");

class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new ApiError(statusCode.BAD_REQUEST, message)
    }

    static internal(message) {
        return new ApiError(statusCode.INTERNAL, message)
    }

    static forbidden(message) {
        return new ApiError(statusCode.FORBIDDEN, message)
    }
}

module.exports = ApiError;