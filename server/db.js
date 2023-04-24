const {Pool} = require('pg')
require("dotenv").config();
const { Sequelize } = require("sequelize");

const pool = new Pool({
    user: 'postgres',
    password: process.env.PG_PASS,
    host: 'localhost',
    port: '5432',
    database: 'DDDdesk'
})

const sequelize = new Sequelize("DDDdesk", "postgres", process.env.PG_PASS, {
    host: "localhost",
    port: "5432",
    dialect: "postgres"
  }); 


module.exports = sequelize