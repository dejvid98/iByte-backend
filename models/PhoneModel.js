const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  screen: {
    type: Number,
    required: true,
  },
  memory: {
    type: Number,
    required: true,
  },
  camera: {
    type: Number,
    required: true,
  },
});

const phone = mongoose.model("phone", phoneSchema);

module.exports = phone;
