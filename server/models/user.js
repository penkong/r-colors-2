const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: value => {
      return validator.isEmail(value);
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: value => {
      return validator.isLength(value, { min: 6, max: undefined });
    }
  }
});

// make time stamps available.
userSchema.plugin(timestamps, {
  createdAt: "created_at",
  updatedAt: "updated_at"
});

//mongo collection
module.exports = mongoose.model("users", userSchema);
