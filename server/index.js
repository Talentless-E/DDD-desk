require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.routes");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());


app.use("/api", userRouter);
app.use("/auth", authRouter);

const start = () => {
   try {
      app.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
   } catch (e) {
      console.log('Error');
   }
};

start()