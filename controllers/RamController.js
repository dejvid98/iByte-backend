const ram = require("../models/RamModel");

exports.getAllRams = async (req, res) => {
  const rams = await ram.find(req.query);
  res.send(rams);
};

exports.findRamById = async (req, res) => {
  const ramResult = await ram.findById(req.params.id);
  res.send(ramResult);
};
