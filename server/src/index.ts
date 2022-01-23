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

const isAnonymous = (name: string) => {
  return name?.indexOf('Anonymous') === 0
}

const getUserFromToken = (token: string) => {
  if (process.env.NODE_ENV === 'dev') {
    const prefix = 'Bearer '
    const isPrefix = token.indexOf(prefix) === 0
    const jwt = isPrefix ? token.slice(prefix.length) : ''
    // console.log({ user: jwt, token })
    return jwt
  }
  return 'FIXME: skip auth'
}

// init server
const server = new ApolloServer({
  cors: { origin: '*' },
  dataSources: () => ({}),
  context: ({ req }: any) => {
    let user = 'Anonymous -1'
    const token = req.headers.authorization || ''
    const anonymous = req.headers.anonymous || ''
    // if: token
    const userFromToken = getUserFromToken(token)
    if (userFromToken) {
      user = userFromToken
    } else if (isAnonymous(anonymous)) {
      user = anonymous
    }
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
    .listen({ port: process.env.SERVER_PORT || '9000' })
    .then(({ url }) => console.log(`Server is ready at ${url}`))
}

main()

process.on('SIGINT', disconnectOrbitDb)
