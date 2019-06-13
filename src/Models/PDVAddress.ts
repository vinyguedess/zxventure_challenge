import Sequelize from "sequelize";
import Database from "../Configurations/Database";

export default class PDVAddress extends Sequelize.Model {}
PDVAddress.init({
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    sequelize: Database,
    modelName: "pdb_address"
})