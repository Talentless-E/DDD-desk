const s3 = require('../utils/yandexAPI')
const Models = require("../models/Models");
const db = require("../db");
const path = require('path')
const { v4: uuidv4 } = require('uuid');
//const test = require('/diplom/DDD-desk/server/downloads/husky')
class ModelController {
   async getModel(req, res) {
      try {
         const { id } = req.body;

         const model = await Models.findOne({ where: { id: id } });
         if (!model)
            return res.status(400).json({ message: "Model not found" });

         res.status(200).json({ model });
      } catch (err) {
         res.status(500).json({ message: err.message });
      }
   }

   async saveModel(req, res) {
      try {
         const { name } = req.body;
         const folderName = uuidv4()
         let buffer = req.files[0].buffer;
         const upload = await s3.Upload({
            path: {buffer},
            save_name: true
         }, `models/${folderName}/`
         )
         //console.log('UPLOAD TO YANDEX CLOUD STORAGE:', upload.Location)
         // let lists = await s3.GetList(`/${folderName}/`)
         // console.log('--------------------------------')
         // console.log(lists)
         // console.log('--------------------------------')
         Models.create({
            name: name,
            link: folderName,
            userId: userId
         })
            .then((model) => res.status(200).json(model))
            .catch((err) => res.status(500).json({ error: err.message }));

      } catch (err) {
         res.status(500).json({ message: err.message });
      }
   }
}

module.exports = new ModelController();
