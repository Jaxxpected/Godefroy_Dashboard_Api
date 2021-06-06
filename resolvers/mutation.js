/**
 * The Mutation Resolvers
 */

const { Customer, User } = require('../mongo/models');
const { ApolloError, ApolloServer } = require('apollo-server');
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
    updateCustomer: async (parent, { customerId, customer }, context) => {
      const customerExist = await Customer.findOne({ _id: customerId });
      if (!customerExist) throw new ApolloServer("No customer found");
      const filter = { _id: customerId };
      const update = { ...customer }
      let updatedCustomer = Customer.findOneAndUpdate(filter, update, {
        new: true
      })
      return updatedCustomer;
    },
    register: async (parent, { user }) => {
      // destructure user
      const { email, password } = user;

      // validate if the user exists
      const userExists = await User.exists({ email });
      if (userExists) throw new Error('User already exists.')

      // create hash
      const hashedPassword = bcrypt.hashSync(password, 12);

      // create new user
      const newUser = await User.create({
        email,
        password: hashedPassword
      });

      // reset the password for security issues
      newUser.password = null;

      // return the user
      return newUser;
    }
  }
}