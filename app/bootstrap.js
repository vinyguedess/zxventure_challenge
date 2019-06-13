"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _Database = _interopRequireDefault(require("./Configurations/Database"));

var _Schema = _interopRequireDefault(require("./Schema"));

var _Resolvers = _interopRequireDefault(require("./Resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Database.default.sync();

const app = (0, _express.default)();
exports.app = app;
app.use("/graphql", (0, _expressGraphql.default)({
  schema: _Schema.default,
  rootValue: _Resolvers.default,
  graphiql: true
}));