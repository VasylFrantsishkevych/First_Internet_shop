const Router = require('express');
const {typeController} = require("../controllers");
const {checkRoleMiddleware} = require("../middlewares");

const router = Router();

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router;