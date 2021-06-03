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
    slv: Int
    sla: Int
    sra: Int
    srv: Int
    wlv: Int
    wla: Int
    wra: Int
    wrv: Int
    tireSummer: Boolean
    tireWinter: Boolean
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