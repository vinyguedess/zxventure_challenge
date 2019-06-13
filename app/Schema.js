"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _default = (0, _graphql.buildSchema)(`
    input PDVInput {
        trading_name: String,
        owner_name: String,
        document: String
    }

    type PDV {
        id: ID!,
        trading_name: String,
        owner_name: String,
        document: String
    }

    type Query {
        pdvs: [PDV]
    }

    type Mutation {
        pdv(data: PDVInput): ID
    }
`);

exports.default = _default;