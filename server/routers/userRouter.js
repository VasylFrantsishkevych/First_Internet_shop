const Router = require('express');
const {userController} = require("../controllers");
const {authMiddleware} = require("../middlewares");

const router = Router();

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth',authMiddleware , userController.check)

module.exports = router;