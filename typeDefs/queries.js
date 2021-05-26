/**
 * The GraphQL queries
 */

const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    customers:[Customer]
    customer(name:String!):Customer
    login(user: UserInput):AuthData
    users:[User]
    user(id:ID):User
  }
`