/**
 * Modelling the playlist
 */

const mongoose = require('mongoose');
const ImageSchema = require('./image');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  lang: String,
  plate: String,
  atelier: String,
  remark: String,
  summerTires: Number,
  winterTires: Number,
  slv: String,
  sla: String,
  sra: String,
  srv: String,
  wlv: String,
  wla: String,
  wra: String,
  wrv: String,
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
  images: [ImageSchema],
});

module.exports = CustomerSchema;