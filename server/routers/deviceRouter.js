const Router = require('express');
const {deviceController} = require("../controllers");

const router = Router();

router.post('/', deviceController.creat)
router.get('/', deviceController.getAll)
router.get('/:deviceId', deviceController.getOneById)

module.exports = router;