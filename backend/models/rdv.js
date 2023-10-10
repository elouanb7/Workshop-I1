const sequelize = require('../config/DB_connection')
const {DataTypes} = require("sequelize");

const Rdv = sequelize.define('rdv', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date_debut: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_fin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    nb_place: {
        type: DataTypes.INTEGER,
        allowNull: false,
        maxLength: 2
    },
})

module.exports = Rdv