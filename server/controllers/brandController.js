const {brandService} = require("../services");
module.exports = {
    create: async (req, res) => {
        const {name} = req.body;

        const brand = await brandService.create(name);

        return res.json(brand);
    },

    getAll: async (req, res) => {
        const brands = await brandService.getAll();

        return res.json(brands);
    },
}