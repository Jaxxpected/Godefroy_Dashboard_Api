/**
 * The Mutation Resolvers
 */

const { Customer, User } = require('../mongo/models');
const { ApolloError } = require('apollo-server');
const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    addCustomer: async (parent, { customer }, context) => {
      try {
        return await Customer.create({
          ...customer,
          addedOn: new Date()
        });
      } catch (e) {
        if (e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },

    updateCustomer: async (parent, { customer }, context) => {
      try {
        return await Customer.findOneAndUpdate({
          ...customer,
        });
      } catch (e) {
        if (e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },

    register: async (parent, { user }) => {
      const { name, email, password } = user;
      if (await User.exists({ email })) throw new Error('User already exists.')
      const hashedPassword = bcrypt.hashSync(password, 12);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword
      });
      newUser.password = null;
      return newUser;
    }
  }
}