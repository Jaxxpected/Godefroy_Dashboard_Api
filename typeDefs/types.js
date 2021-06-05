/**
 * The GraphQL types
 */

const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type Customer {
    id: ID!
    name: String
    picture: Upload
    email: String
    lang: String
    plate: String
    atelier: String
    remark: String
    summerTires: Int
    winterTires: Int
    slv: String
    sla: Float
    sra: Float
    srv: Float
    wlv: Float
    wla: Float
    wra: Float
    wrv: Float
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