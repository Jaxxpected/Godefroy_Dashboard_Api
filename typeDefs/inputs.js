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
  }

  input UserInput {
    name: String
    email: String
    password: String
  }
`