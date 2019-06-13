import Sequelize from "sequelize";
import Database from "../Configurations/Database";
import PDVAddress from "./PDVAddress";
import PDVCoverageArea from "./PDVCoverageArea";

export default class PDV extends Sequelize.Model {}
PDV.init({
    trading_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    owner_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    document: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: Database,
    modelName: "pdv"
})
PDV.hasOne(PDVAddress);
PDV.hasMany(PDVCoverageArea);