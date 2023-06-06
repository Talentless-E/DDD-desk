const {Pool} = require('pg')
require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.PG_DATABASE_NAME, process.env.PG_USERNAME, process.env.PG_PASS, {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres"
  }); 


module.exports = sequelize