"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PDV = _interopRequireDefault(require("./Models/PDV"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pdvs = () => _PDV.default.findAll();

const pdv = ({
  data
}, request) => {
  console.log(request.method, data);
  return null;
};

var _default = {
  pdvs,
  pdv
};
exports.default = _default;