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

  slvName: String,
  slaName: String,
  sraName: String,
  srvName: String,
  wlvName: String,
  wlaName: String,
  wraName: String,
  wrvName: String,

  slvUrl: String,
  slaUrl: String,
  sraUrl: String,
  srvUrl: String,
  wlvUrl: String,
  wlaUrl: String,
  wraUrl: String,
  wrvUrl: String,

  slvUrlDate: String,
  slaUrlDate: String,
  sraUrlDate: String,
  srvUrlDate: String,
  wlvUrlDate: String,
  wlaUrlDate: String,
  wraUrlDate: String,
  wrvUrlDate: String,
});

module.exports = CustomerSchema;