const mongoose = require("mongoose");

const laptopSchema = mongoose.Schema({
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
  hdd: {
    type: Number,
    required: true,
  },
  cpu: {
    type: String,
    required: true,
  },
});

const laptop = mongoose.model("laptop", laptopSchema);

module.exports = laptop;
