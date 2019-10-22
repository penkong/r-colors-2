const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// db model
const User = require('../../../models/user');


module.exports = app => {

  // sign up a user for first time
  app.post('/api/signup', async (req,res) => {
    
    // draw out info from request 
    const { username, email, password } = req.body;

    // simple validation check
    if (!username || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // check user exist or not
    try {
      const user = await User.findOne({ email });
      if(user) return res.status(400).json({ msg: 'User already exists' });
      const newUser = new User({ username, email, password });

      // generate salt & to create hash
      bcrypt.genSalt(10, (err, salt) => {

        if(err) throw err;
        bcrypt.hash(newUser.password, salt, async (err, hash) => {

          if(err) throw err;

          // replace user password with hash for security purposes.
          newUser.password = hash;
          const user = await newUser.save()

          // generate token
          const payload = { id: user.id, username: user.username, email: user.email}
          jwt.sign(payload, config.get('jwtSecret'), async (err, token) => {
              if(err) throw err;
              await res.json({ token });
            }
          )
        });
      });

    } catch (error) {
      return res.status(404).json({ msg: 'error come by something weird!' });
    }
  });
}