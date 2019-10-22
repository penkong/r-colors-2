module.exports = app => {
  require('./authUser')(app);
  require('./fetchUser')(app);
  // require('./registerGoogle')(app);
  require('./registerUser')(app);
}
