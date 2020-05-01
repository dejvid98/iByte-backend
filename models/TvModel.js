const mongoose = require("mongoose");

const tvSchema = mongoose.Schema({
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
  size: {
    type: Number,
    required: true,
  },
  hdr: {
    type: Boolean,
    required: true,
  },
  resolution: {
    type: String,
    required: true,
  },
});

const tv = mongoose.model("tv", tvSchema);

module.exports = tv;
