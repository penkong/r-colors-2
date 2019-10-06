//-----------------------------------------------
const redisClient = require('./redisClient');
module.exports = async (user, token, collection ) => {
  const keyForRedis = JSON.stringify({
    user: user,
    token: token,
    collection: collection
  });
  const cachedVal = await redisClient.get(keyForRedis);
  return {
    keyForRedis,
    cachedVal
  };
}