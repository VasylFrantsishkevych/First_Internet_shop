const {Device, DeviceInfo} = require("../models/models");

module.exports = {
    create(deviceObject) {
        return Device.create(deviceObject);
    },

    getAll(limit, offset) {
        return Device.findAndCountAll({limit, offset});
    },

    getAllAndFilter(filter, limit, offset) {
        return Device.findAndCountAll({where: filter, limit, offset});
    },

    getOneById(deviceId) {
        return Device.findOne(
            {
                where: deviceId,
                include: [{model: DeviceInfo, as: 'info'}]
            }
        );
    },
}