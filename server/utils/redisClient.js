//----------------------------------------------
const Redis = require('redis');
const {
  promisify
} = require('util')

// register.
const redisUrl = process.env.REDIS_PORT || process.env.redisUrl;
const redisClient = Redis.createClient(redisUrl);

// make redis accept promises
redisClient.get = promisify(redisClient.get);
redisClient.hget = promisify(redisClient.hget);
module.exports = redisClient;
//---------------------------------------------------------------------