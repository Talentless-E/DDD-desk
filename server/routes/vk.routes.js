const Router = require('express')
const router = new Router()
const VkController = require('../controller/vk.controller')

router.get('/getVkCode', VkController.getAccessCode)
router.get('/getVkToken', VkController.getAccessToken)
router.post('/makePost', VkController.makePost)

module.exports = router