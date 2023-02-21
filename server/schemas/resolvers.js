const { GraphQLError } = require('graphql');
const { User, Event, Group, List, Item } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    // TODO: dateScalar error - Date: dateScalar,
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
      user: async (parent, { name }) => {
        return User.findOne({ name })
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
            console.log('loginuser', user)
            if (!user) {
                console.log('here')
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
            return { token, user };
        },

        updateUser: async (parent, args, context) => {
          if (context.user) {
            return await User.findByIdAndUpdate(context.user._id, args, {
              new:true,
            });
          }
          throw new AuthenticationError('You need to be logged in!');
        },

        removeUser: async(parent, args, context) => {
          if (context.user) {
            return User.findByIdAndDelete({
              _id: context.user._id
            });
          }
          throw new AuthenticationError('You need to be logged in!');
        },

        addGroup: async (parent, args, context) => {
          if (context.user) {
            const group = await Group.create({
              ...args,
            });
            console.log(group)

            await User.findOneAndUpdate(
              {_id:context.user_id },
              {$push: {groups: group._id}},
              {new: true}
            );
            return group;
          }
          throw new AuthenticationError('You need to be logged in!');
        },

        updateGroup: async (parent, args, context) => {
          if(context.user) {
            return await Group.findOneAndUpdate(args._id, args, {
              new: true
            });
          }
          throw new AuthenticationError('You need to be logged in!');
        } ,

        removeGroup: async (parent, { skill }, context) => {
          if (context.user) {
            return User.findByIdAndDelete({
              _id: context.user_id
            });
          }
          throw new AuthenticationError('You need to be logged in!');
        },

        addEvent: async (parent, args, context) => {
          if (context.user) {
            const event = await Event.create({
            ...args,
          });
          console.log(event);
          await User.findOneAndUpdate(
            { name: args.name },
            { $push: { events: event._id} },
            { new: true }
          );
          return event;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      updateEvent: async (parent, args, context) => {
        console.log(args);
        if (context.user) {
          return await Event.findByIdAndUpdate(args._id, args, { new: true });
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      deleteEvent: async (parent, args, context) => {
        if (context.user) {
          const event = await Event.findById({ _id });
          
          if (event) {
            return await Event.findByIdAndDelete({ _id });
          }
          throw new AuthenticationError('No event with that Name was found!');
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      addList: async (parent, args, context) => {
        if (context.user) {
          const list = await List.create({
            ...args,
          });
          await User.findOneAndUpdate(
            { _id: context.user._id},
            { $push: { lists: list._id }},
            { new: true }
          );
          return list;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      updateList: async (parent, args, context) => {
        console.log(args);
        if (context.user) {
          return await List.findByIdAndUpdate(args._id, args, {
            new: true,
          });
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      removeList: async (parent, {_id}, context) => {
        if (context.user) {
          const list = await List.findById({ _id });
          if (list) {
            return await List.findByIdAndDelete({ _id });
          }
          throw new AuthenticationError('List is not found!');
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      addItem: async (parent, {listId, itemDescription, quantity }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id},
            { $push: { items: { itemDescription, quantity }}},
            { new: true, runValidators: true }
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      removeItem: async (parent, { _id }, context) => {
        if (context.user) {

            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id},
              { $pull: { items: { _id }}},
              { new: true, runValidators: true }
            );
            return updatedUser
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    },

};

module.exports = resolvers;
