module.exports = app => {
  // ----- '/api/auth/signup'
  require("./registerUser")(app);

  // ----- '/api/auth/login'
  require("./authUser")(app);

  // ----- '/api/auth/gsignup'
  // require('./registerGoogle')(app);

  // ----- '/api/auth/glogin'
  // require('./registerGoogle')(app);

  // ----- '/api/auth/user'
  require("./fetchUser")(app);
};
