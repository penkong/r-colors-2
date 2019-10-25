// check auth for fetch user
const auth = require("../../../middlewares/auth");

// db model
const User = require("../../../models/user");

module.exports = app => {
  // get the current user.
  app.get("/api/auth/user", auth, async (req, res) => {
    try {
      await User.findById(req.user.id)
        // don't want to return password.
        .select("-password")
        .then(() => res.json("ok"));
    } catch (error) {
      return res.status(404).json({ msg: "you are not allowed!" });
    }
  });
};
