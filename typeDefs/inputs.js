/**
 * The GraphQL inputs
 */

const { gql } = require('apollo-server');

module.exports = gql`
  input CustomerInput {
    id: ID
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
    slvName: String
    slaName: String
    sraName: String
    srvName: String
    wlvName: String
    wlaName: String
    wraName: String
    wrvName: String
    slvUrl: String
    slaUrl: String
    sraUrl: String
    srvUrl: String
    wlvUrl: String
    wlaUrl: String
    wraUrl: String
    wrvUrl: String
    slvUrlDate: String
    slaUrlDate: String
    sraUrlDate: String
    srvUrlDate: String
    wlvUrlDate: String
    wlaUrlDate: String
    wraUrlDate: String
    wrvUrlDate: String
  }

  input TokenInput {
    token: String
    id: ID
  }

  input UserInput {
    name: String
    email: String
    password: String
  }
`