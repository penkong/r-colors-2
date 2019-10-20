const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// db model
const User = require('../../models/user');


module.exports = app => {

  // user login
  app.post('/api/login', async (req, res) => {
    const {
      email,
      password
    } = req.body;
    try {
      user = await User.findOne({ email });
      if(!user) return res.status(400).json({ msg: 'User does not exist' });
      
    } catch (error) {
      
    }
  })
}