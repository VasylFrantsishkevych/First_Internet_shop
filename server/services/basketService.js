const {Basket} = require("../models/models");

module.exports = {
    create(userId) {
        return Basket.create(userId);
    }
}