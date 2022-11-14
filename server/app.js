const express = require('express');
require('dotenv').config();
const cors = require('cors');

const sequelize = require('./db');
const {PORT} = require("./configs/configs");
const models = require('./models')

const app = express();

app.use(cors())
app.use(express.json())



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`)
        });
    } catch (e) {
        console.log(e)
    }
}

start();