const mongoose = require("mongoose");

const powersupplySchema = mongoose.Schema({
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
  power: {
    type: Number,
    required: true
  },
  efficency: {
    type: Number,
    required: true
  },
  type: {
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

const powersupply = mongoose.model("Powersupply", powersupplySchema);

module.exports = powersupply;
