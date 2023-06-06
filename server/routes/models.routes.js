const Router = require('express');
const router = new Router();
const modelController = require('../controller/models.controller')

router.post('/upload', modelController.saveModel)
router.post('/model', modelController.getModel)

module.exports = router