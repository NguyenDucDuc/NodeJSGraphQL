import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from './typeDefs/TypeDefs.js'
import {resolvers} from './resolvers/Resolvers.js'
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/GraphQL', () => {
    console.log('mongodb connected...')
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);