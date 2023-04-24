const db = require("../db");
const User = require("../models/User");

class UserController {

   async getUser(req, res) {
    try{
        const id = req.params.id;
        const user = await User.findOne({ where: { id: id}})
        res.status(200).json(user)
    }
    catch (err) {
        res.status(404).json({message: "Cannot find user with id: " + id})
    }
   }

   async updateUser(req, res) {
    try{
        const { id ,name, email, password } = req.body;
        const user = await db.query(`UPDATE users set name = $2, email = $3, password = $4 where id = $1`, [id, name, email, password])
        res.json(user.rows[0])
    }
    catch (err) {
        res.json(err)
    }
   }

   async deleteUser(req, res) {
    try{
        const id = req.params.id;
        const user = await db.query(`DELETE FROM users where id = $1`, [id])
        res.json(user.rows[0])
    }
    catch (err) {
        res.json(err)
    }
   }
}

module.exports = new UserController();
