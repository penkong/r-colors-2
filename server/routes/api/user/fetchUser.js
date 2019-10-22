const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// db model
const User = require('../../../models/user');


module.exports = app => {

  // fetch user 
  app.get('/api/user', async (req,res) => {
    User
      .find()
      .then(user => res.json(user));
  })

}