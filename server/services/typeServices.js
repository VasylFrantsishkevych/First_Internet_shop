const {Type} = require("../models/models");

module.exports = {
    create(name) {
        return Type.create({name});
    },

    getAll() {
        return Type.findAll();
    }

}