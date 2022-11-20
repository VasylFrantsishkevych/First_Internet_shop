const uuid = require('uuid');
const path = require('path');

const {apiError} = require("../error");
const {deviceService} = require("../services");
const {DeviceInfo} = require("../models/models");

module.exports = {
    creat: async (req, res, next) => {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await deviceService.create({name, price, brandId, typeId, img: fileName})

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id,
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }
    },

    getAll: async (req, res) => {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit
        let devices;
        if(!brandId && !typeId) {
            devices = await deviceService.getAll(limit, offset )
        }
        if(brandId && !typeId) {
            devices = await deviceService.getAllAndFilter({brandId}, limit, offset)
        }
        if(!brandId && typeId) {
            devices = await deviceService.getAllAndFilter({typeId}, limit, offset)
        }
        if (brandId && typeId) {
            devices = await deviceService.getAllAndFilter({brandId, typeId}, limit, offset)
        }

        return res.json(devices);
    },

    getOneById: async (req, res) => {
        const {deviceId} = req.params;
        const device = await deviceService.getOneById({id: deviceId});

        return res.json(device)
    },
}