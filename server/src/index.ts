/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 *
 */

require('dotenv').config({ path: '.env.' + process.env.NODE_ENV })

import { ApolloServer, gql } from 'apollo-server'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import { connectOrbitDb, disconnectOrbitDb } from './utils/orbitDb'

// init server
const server = new ApolloServer({
  cors: {
    origin: [],
  },
  dataSources: () => ({}),
  context: ({ req }: any) => {
    const user = 'Tester'
    return { user, req }
  },
  debug: true,
  resolvers: {
    Query,
    Mutation,
  },
  typeDefs: require('fs').readFileSync('src/schema.graphql').toString('utf-8'),
})

async function main() {
  await connectOrbitDb()
  await server
    .listen({ port: process.env.SERVER_PORT || '5678' })
    .then(({ url }) => console.log(`Server is ready at ${url}`))
}

main()

process.on('SIGINT', disconnectOrbitDb)
