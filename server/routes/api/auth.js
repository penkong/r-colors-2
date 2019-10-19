const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// db model
const User = require('../../models/user');


module.exports = app => {

  // sign up a user for first time
  app.post('/api/signup', async (req,res) => {
    
    // draw out info from request 
    const {
      username,
      email,
      password
    } = req.body;

    // simple validation check
    if (!username || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // check user exist or not
    try {
      const user = await User.findOne({ email })
      if(user) return res.status(400).json({ msg: 'User already exists' });
      const newUser = new User({
        username,
        email,
        password
      });
      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          const user = await newUser.save()
          jwt.sign({ id: user.id }, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
              if(err) throw err;
              res.json({ token, user: { id: user.id, username: user.username, email: user.email}});
            }
          )
        })
      })
    } catch (error) {
      console.log(error);
    }
    
  });

  // user login
  app.post('/api/login', async (req, res) => {
    const {
      username,
      email,
      password
    } = req.body;

  })

  // fetch user 
  app.get('/api/user', async (req,res) => {
    User
      .find()
      .then(user => res.json(user));
  })

}