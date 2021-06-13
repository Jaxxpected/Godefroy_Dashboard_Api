/**
 * The GraphQL queries
 */

const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    customers:[Customer]
    customer(id:ID!):Customer
    search(search: String):[Customer]
    login(user: UserInput):AuthData
    users:[User]
    user(id:ID):User
    checkAdmin(id:ID):AuthData
    renewToken(token: TokenInput):Token
  }
`