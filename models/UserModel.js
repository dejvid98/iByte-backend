const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  street: {
    type: String,
  },
  postalCode: {
    type: Number,
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
