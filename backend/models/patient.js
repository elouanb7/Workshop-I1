const sequelize = require('../config/DB_connection')
const {DataTypes} = require("sequelize");

const Patient = sequelize.define('patient',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            maxLength: 25
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
            maxLength: 25
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            maxLength: 25
        },
    })

module.exports = Patient