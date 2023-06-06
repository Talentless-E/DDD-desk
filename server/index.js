require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.routes");
const modelsRouter = require('./routes/models.routes')
const vkRouter = require('./routes/vk.routes')
const cors = require("cors");
const bodyParser = require("body-parser")
const multer = require('multer')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(multer().any())
//app.use(bodyParser.urlencoded({extended: true}))

app.use("/api", [userRouter, modelsRouter, vkRouter] );
app.use("/auth", authRouter);


const start = () => {
   try {
      app.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
   } catch (e) {
      console.log('Error');
   }
};

start()