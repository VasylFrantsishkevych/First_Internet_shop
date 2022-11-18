const {Brand} = require("../models/models");

module.exports = {
    create(name) {
        return Brand.create({name});
    },

    getAll() {
        return Brand.findAll();
    }

}