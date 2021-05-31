/**
 * The GraphQL mutations
 */

const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    addCustomer(customer: CustomerInput):Customer
    updateCustomer(customerId: ID!, customer: CustomerInput):Customer
    register(user: UserInput):User
  }
`