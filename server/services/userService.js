const {User} = require("../models/models");

module.exports = {
    create(user) {
        return User.create(user);
    },

    findOneByEmail(email) {
        return User.findOne({where: email});
    },
}