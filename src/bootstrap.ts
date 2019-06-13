import express from "express";
import GraphQLHTTP from "express-graphql";
import Database from "./Configurations/Database";
import Schema from "./Schema";
import Resolvers from "./Resolvers";

export const app = express();
app.use(
    async (request, response, next): Promise<void> => 
    {
        await Database.sync();
        next();
    }
);
app.use(
    "/graphql",
    GraphQLHTTP({
        schema: Schema,
        rootValue: Resolvers,
        graphiql: true
    })
);
