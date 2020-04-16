const mongoose = require("mongoose");

const ssdSchema = mongoose.Schema({
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
  capacity: {
    type: Number,
    required: true
  },
  writeSpeed: {
    type: Number,
    required: true
  },
  readSpeed: {
    type: Number,
    required: true
  },
  rating: {
    type: Number
  },
  reviews: {
    type: [String]
  }
});

const ssd = mongoose.model("Ssd", ssdSchema);

module.exports = ssd;
