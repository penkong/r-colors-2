
// check auth for fetch user
const auth = require('../../../middlewares/auth');

// db model
const User = require('../../../models/user');

module.exports = app => {

  // get the current user.
  app.get('/api/auth/user', auth, (req, res) => {
    User.findById(req.user.id)
    // don't want to return password.
      .select('-password')
      .then(user => res.json(user));
  });
}