/**
 * Importing mongoose
 */

const mongoose = require('mongoose');

/**
 * Importing schemas
 */

const CustomerSchema = require('./schemas/customer');
const UserSchema = require('./schemas/user');

/**
 * Creating mongoose models
 */

const Customer = mongoose.model('Customer', CustomerSchema);
const User = mongoose.model('User', UserSchema);

/**
 * Exporting the models
 */

module.exports = {
  Customer,
  User
}