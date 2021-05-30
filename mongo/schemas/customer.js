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
  zlv: Number,
  zla: Number,
  zra: Number,
  zrv: Number,
  picture: {
    data: Buffer,
    contentType: String
  }
});

module.exports = CustomerSchema;