const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
class AuthController {
   async registration(req, res) {
      const { name, email, password } = req.body;

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const existEmail = await User.findOne({ where: {email: email}})

      if (existEmail) return res.status(400).json({message: "Email already exists."})

      User.create({
         name: name,
         email: email,
         password: passwordHash,
      })
         .then((user) => res.status(200).json(user))
         .catch((err) => res.status(500).json({ error: err.message }));
   }
   async login(req, res) {
      try {
         const { email, password } = req.body;

         const user = await User.findOne({ where: {email: email} });
         if (!user) return res.status(400).json({ msg: "User not found" });
        
         const isMatch = await bcrypt.compare(password, user.password)
         if (!isMatch) return res.status(400).json({ msg: "Invalid data" });

         const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET)
         delete user.password
         
        //  console.log(jwt.decode(token))
         res.status(200).json({token, user})
      } catch (err) {
         res.status(500).json({ error: err.message });
      }
   }
}

module.exports = new AuthController();
