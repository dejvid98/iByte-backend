const mongoose = require("mongoose");

const ramSchema = mongoose.Schema({
  manufacturer: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  photoURL: {
    type: String,
    required: true
  },
  memory: {
    type: Number,
    required: true
  },
  speed: {
    type: Number,
    required: true
  }
});

const ram = mongoose.model("Ram", ramSchema);

module.exports = ram;
