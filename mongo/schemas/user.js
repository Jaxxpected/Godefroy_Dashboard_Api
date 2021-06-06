/**
 * Modelling the user
 */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  admin: Boolean
});

module.exports = UserSchema;