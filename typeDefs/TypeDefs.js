import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

export const typeDefs = `#graphql
  type Post {
    id: String
    content: String
  }

  type User {
    id: String
    username: String
    posts: [Post]
  }

  type Query {
    users: [User]
  }
  
  type Mutation {
    addUser (username:String): User,
    getAllUser: [User]
    addPost (content:String, userId:String): Post
  }
`;
