/**
 * The GraphQL inputs
 */

const { gql } = require('apollo-server');

module.exports = gql`
  input CustomerInput {
    id: ID
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

  input UserInput {
    name: String
    email: String
    password: String
  }
`