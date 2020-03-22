const mongoose = require("mongoose");

const cpuSchema = mongoose.Schema({
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
  cores: {
    type: Number,
    required: true
  },
  threads: {
    type: Number,
    required: true
  },
  speed: {
    type: Number,
    required: true
  }
});

const cpu = mongoose.model("Cpu", cpuSchema);

module.exports = cpu;
