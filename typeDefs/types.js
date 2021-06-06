/**
 * The GraphQL types
 */

const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type Customer {
    id: ID!
    name: String
    email: String
    lang: String
    plate: String
    atelier: String
    remark: String
    summerTires: Int
    winterTires: Int
    slv: String
    sla: String
    sra: String
    srv: String
    wlv: String
    wla: String
    wra: String
    wrv: String
    kit: Boolean
    tire: Boolean
    slvp: Boolean
    slap: Boolean
    srap: Boolean
    srvp: Boolean
    wlvp: Boolean
    wlap: Boolean
    wrap: Boolean
    wrvp: Boolean
  }

  type Token {
    token: String
    id: ID
  }

  type AuthData {
    userId: ID
    token: String
    admin: Boolean
  }

  type User {
    id: ID
    name: String
    email: String
    password: String
  }
`