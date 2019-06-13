import express from "express";
import GraphQLHTTP from "express-graphql";
import Database from "./Configurations/Database";
import Schema from "./Schema";
import Resolvers from "./Resolvers";

Database.sync();

export const app = express();
app.use("/graphql", GraphQLHTTP({
    schema: Schema,
    rootValue: Resolvers,
    graphiql: true
}));