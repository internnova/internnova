import "reflect-metadata";
import * as tq from "type-graphql";
import { ApolloServer } from "apollo-server";
import { context } from "./context";
import dotenv from "dotenv";
dotenv.config();
import { resolvers } from "@generated/type-graphql";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers,
  });

  new ApolloServer({ schema, context: context })
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
      console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `);
    });
};

app();
