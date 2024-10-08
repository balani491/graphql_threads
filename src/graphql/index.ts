import { ApolloServer } from "@apollo/server";
import { prismaClient } from "../lib/db";
import { User } from './user'

async function createApolloGraphqlServer() {
  // Create GraphQL server
  const gqlserver = new ApolloServer({
        typeDefs: `
            ${User.typeDefs}
            type Query {
                ${User.queries}
            }
            type Mutation {
                ${User.mutations}
            }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries
            },
            Mutation: {
                ...User.resolvers.mutations
            },
        },
    });

    // Start the GraphQL server
    await gqlserver.start();
    return gqlserver;
}


export default createApolloGraphqlServer;