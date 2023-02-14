const { GraphQLError } = require('graphql');
const { User, Event, Group, List, Item } = require('../models')

const resolvers = {
    Date: dateScalar,
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('events');
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      users: async () => {
        return User.find().select('-__v -password');
      },
      user: async (parent, { firstName }) => {
        return User.findOne({ firstName })
          .select('-__v -password')
          .populate('events');
      },
      groups: async (parent, { username })=> {
        const params = username ? { username } : {};
        return Group.find(params).sort({ createdAt: -1});
      },
      group: async (parent, { username }) => {
        return Group.findOne({ _id });
      },
      lists: async (parent, { username }) => {
        const params = username ? { username } : {};
        return List.find(params).sort({ createdAt: -1 });
      },
      list: async (parent, { _id }) => {
        return List.findOne({ _id });
      },
      events: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Event.find(params).sort({ createdAt: -1 });
      },
      event: async (parent, { _id }) => {
        return Event.findOne({ _id });
      }
    },
    Mutation: {
        login: async (parent, { email, password}, context, info) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw new GraphQLError
                ('User not found', {
                    extensions: {
                        code: 'USER NOT FOUND',
                        http: { status: 404 }
                    }
                })
            }
            
            const isCorrectPassword = await user.isCorrectPassword(password)
            if(!isCorrectPassword) {
                throw new GraphQLError('Password is incorrect', {
                    extensions: {
                        code: 'INCORRECT PASSWORD',
                        http: {status: 401}
                    }
                })
            }
            const token = signToken(user)

            return { token, user }
        },

        addUser: async (parent, args, context, info) => {
            const user = await User.Create (args)
            return user.populate()
        }
    }

}