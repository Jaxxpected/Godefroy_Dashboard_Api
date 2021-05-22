/**
 * Modelling the playlist
 */

const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  lang: String,
  plate: String,
  atelier: String,
  remark: String,
  summerTires: Number,
  winterTires: Number
});

module.exports = CustomerSchema;