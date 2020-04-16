const mongoose = require("mongoose");

const motherboardSchema = mongoose.Schema({
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
  format: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  reviews: {
    type: [String]
  }
});

const motherboard = mongoose.model("Motherboard", motherboardSchema);

module.exports = motherboard;
