const mongoose = require("mongoose");

const gpuSchema = mongoose.Schema({
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
  memoryType: {
    type: String,
    required: true
  }
});

const gpu = mongoose.model("Gpu", gpuSchema);

module.exports = gpu;
