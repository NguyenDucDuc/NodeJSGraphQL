import { Post } from "../models/Post.js";
import { User } from "../models/User.js";



export const resolvers = {
    Query: {
      users: () => {
        console.log("list user")
      },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create({
                username: args.username
            })
            return user
        },
        getAllUser: async (parent, args) => {
            const user = await User.find()
            return user
        },
        addPost: async (parent, args) => {
            const newPost = await Post.create({
                content: args.content,
                user: args.userId
            })
            const user = await User.findById(args.userId)
            await user.updateOne({$push: {posts: newPost._id}})
            return newPost
        }
    },
    User: {
        posts: async (parent, args) => {
            const posts = await Post.find({user: parent._id})
            return posts
        }
    }
  };