const express = require('express');
require('dotenv').config();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const sequelize = require('./db');
const {PORT} = require("./configs/configs");
const models = require('./models')
const {errorHandlerMiddleware} = require("./middlewares");
const {userRouter, typeRouter, brandRouter, deviceRouter} = require("./routers");

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/type', typeRouter);
app.use('/brand', brandRouter);
app.use('/device', deviceRouter);

app.use(errorHandlerMiddleware)

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