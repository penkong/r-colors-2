const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// db model
const User = require("../../../models/user");

module.exports = app => {
  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    try {
      // Check for existing user
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User does not exist" });

      // validate password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid Inputs! try again." });

      // generate token
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email
      };
      jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      return res.status(404).json({ msg: "error on login!" });
    }
  });
};
