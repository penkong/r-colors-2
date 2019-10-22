module.exports = app => {

  // ----- '/api/login'
  require('./authUser')(app);

  // ----- '/api/auth/user'
  require('./fetchUser')(app);

  // require('./registerGoogle')(app);

  // ----- '/api/signup'
  require('./registerUser')(app);
}
