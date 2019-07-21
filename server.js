import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const hostname = 'localhost';
const portServer = process.env.PORT || 4000;

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

db.sequelize.sync(/* {force: true} */).then(() => {

  app.listen({ port: portServer }, () =>
    console.log(`🚀 Server ready at http://${hostname}:${portServer}${server.graphqlPath}`)
  );
});
