/**
 * The Subscription Resolvers
 */

const pubsub = require('./pubsub');

module.exports = {
  Subscription: {
    customerAdded: { subscribe: () => pubsub.asyncIterator("CUSTOMER_ADDED") },
  }
};