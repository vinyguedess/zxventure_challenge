"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Database = _interopRequireDefault(require("../Configurations/Database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PDVCoverageArea extends _sequelize.default.Model {}

exports.default = PDVCoverageArea;
PDVCoverageArea.init({
  latitude: {
    type: _sequelize.default.FLOAT,
    allowNull: false
  },
  longitude: {
    type: _sequelize.default.FLOAT,
    allowNull: false
  }
}, {
  sequelize: _Database.default,
  modelName: "pdv_coverage_area"
});