const Router = require('express');
const {userController} = require("../controllers");

const router = Router();

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

module.exports = router;