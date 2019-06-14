import dotenv from "dotenv";
import Sequelize from "sequelize";
import { Sequelize as TSSequelize } from "sequelize-typescript"
import PDV from "../Models/PDV";
import PDVAddress from "../Models/PDVAddress";
import PDVCoverageArea from "../Models/PDVCoverageArea";

dotenv.config();

const sequelize = new TSSequelize({
    dialect: process.env.DB_DRIVER as Sequelize.Dialect,

    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,

    storage: process.env.DB_NAME,

    logging: false
});

sequelize.addModels([
    PDV,
    PDVAddress,
    PDVCoverageArea
]);

export default sequelize