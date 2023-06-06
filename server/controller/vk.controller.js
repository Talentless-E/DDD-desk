const bridge = require('@vkontakte/vk-bridge')
const { VK } = require('vk-io')

class VkController {
    async getAccessCode(req, res) {
      const vk = new VK({})
      const authUrl = vk.oauth.authorizationUrl({
        client_id: 51626096,
        redirect_uri: 'http://localhost:5173/getVkToken',
        scope: 'offline',
        response_type: 'code',
      });
     res.redirect(authUrl)
      
    }
    async getAccessToken(req, res) {
      const vk = new VK({})
      const { code } = req.query
      const { access_token } = await vk.oauth.userToken({
        client_id: APP_ID,
        client_secret: APP_SECRET,
        redirect_uri: `http://localhost:5173/getVKToken`,
        code,
      });
      console.log(`Access Token: ${access_token}`)
      res.status(500).json(access_token)
    }
    async makePost(req, res) {
        
    }
} 

module.exports = new VkController()

//51626096