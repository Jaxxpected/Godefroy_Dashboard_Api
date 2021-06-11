/**
 * Modelling an image
 */

const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  url: String,
  alt: String,
  date: String
});

module.exports = ImageSchema;