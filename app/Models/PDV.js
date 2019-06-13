"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Database = _interopRequireDefault(require("../Configurations/Database"));

var _PDVAddress = _interopRequireDefault(require("./PDVAddress"));

var _PDVCoverageArea = _interopRequireDefault(require("./PDVCoverageArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PDV extends _sequelize.default.Model {}

exports.default = PDV;
PDV.init({
  trading_name: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  owner_name: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  document: {
    type: _sequelize.default.STRING,
    allowNull: false
  }
}, {
  sequelize: _Database.default,
  modelName: "pdv"
});
PDV.hasOne(_PDVAddress.default);
PDV.hasMany(_PDVCoverageArea.default);