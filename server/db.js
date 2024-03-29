const {Sequelize} = require('sequelize');

const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT} = require("./configs/configs");

module.exports = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        dialect: 'postgres',
        host: DB_HOST,
        port: DB_PORT,
    }
)
