const mongoose = require("mongoose");
const validator = require("validator");

//creating the schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Id");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
    unique: true
  },
  message: {
    type: String,
    required: true,
    minLength: 10,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//creating the collection or model
const User = mongoose.model("User", userSchema);

module.exports = User;
