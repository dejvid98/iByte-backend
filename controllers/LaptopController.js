const laptop = require("../models/LaptopModel");

exports.getAllLaptops = async (req, res) => {
  const laptops = await laptop.find(req.query);
  res.send(laptops);
};

exports.findLaptopById = async (req, res) => {
  const laptops = await laptop.findById(req.params.id);
  res.send(laptops);
};
