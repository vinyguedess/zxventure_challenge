import Sequelize from "sequelize"
import Database from "../Configurations/Database";

export default class PDVCoverageArea extends Sequelize.Model {}
PDVCoverageArea.init({
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
    modelName: "pdv_coverage_area"
});