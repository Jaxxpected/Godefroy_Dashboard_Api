/**
 * The GraphQL types
 */

const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type Customer {
    id: ID!
    name: String!
    email: String
    lang: String
    plate: String
    atelier: String
    remark: String
    summerTires: Int
    winterTires: Int
  }

  type AuthData {
    userId: ID
    token: String
  }

  type User {
    id: ID
    name: String
    email: String
    password: String
  }
`