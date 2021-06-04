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
  winterTires: Number,
  slv: Number,
  sla: Number,
  sra: Number,
  srv: Number,
  wlv: Number,
  wla: Number,
  wra: Number,
  wrv: Number,
  kit: Boolean,
  tire: Boolean,
  slvp: Boolean,
  slap: Boolean,
  srap: Boolean,
  srvp: Boolean,
  wlvp: Boolean,
  wlap: Boolean,
  wrap: Boolean,
  wrvp: Boolean,
  picture: {
    data: Buffer,
    contentType: String
  }
});

module.exports = CustomerSchema;