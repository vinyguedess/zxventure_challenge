import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config();

export default new Sequelize.Sequelize({
    dialect: process.env.DB_DRIVER as Sequelize.Dialect,

    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,

    storage: process.env.DB_NAME
})