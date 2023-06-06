require("dotenv").config();
const EasyYandexS3 = require('easy-yandex-s3').default;

const s3 = new EasyYandexS3({
    auth:{
        accessKeyId: process.env.YA_ACCESS_KEY,
        secretAccessKey: process.env.YA_SECRET_KEY,
    },
    Bucket: process.env.YA_BUCKET_NAME,
    debug: true,
})

module.exports = s3