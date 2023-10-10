const {Sequelize} = require("sequelize");
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "postgres",
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: false
    },
    pool: {
        max: 200,
        min: 0,
        acquire: 60000,
        idle: 10000
    },
    logging: true,
})

module.exports = sequelize
