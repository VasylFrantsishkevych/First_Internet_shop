const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {apiError} = require("../error");
const {userService, basketService} = require("../services");
const {Basket} = require("../models/models");

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'},
    )
}

module.exports = {
    registration: async (req, res, next) => {
        const {email, password, role} = req.body;

        if (!email || !password) {
            return next(apiError.badRequest('Некоректний емеіл або пароль'))
        }

        const candidate = await userService.findOneByEmail({email})
        if (candidate) {
            return next(apiError.badRequest('Користувач з таким емейлом вже існує'))
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await userService.create({email, role, password: hashPassword});
        const basket = await basketService.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role);

        return res.json({token})
    },

    login: async (req, res, next) => {
        const {email, password} = req.body;

        const user = await userService.findOneByEmail({email});
        if (!user) {
            return next(apiError.internal('Користувач не знайдений'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(apiError.internal('Вказаний неправильний пароль обо емеіл'))
        }

        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token});
    },

    check: async (req, res) => {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token});
    },
}