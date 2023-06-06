const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db"); // Импортируем объект sequelize, который представляет общее подключение к базе данных

class Models extends Model {}

Models.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'models'
})

module.exports = Models;