const {typeService} = require("../services");

module.exports = {
    create: async (req, res) => {
        const {name} = req.body

        const type = await typeService.create(name);

        return res.json(type)
    },

    getAll: async (req, res) => {
        const types = await typeService.getAll();

        res.json(types);
    },
}