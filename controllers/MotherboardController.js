const motherboard = require("../models/MotherboardModel");

exports.getAllMotherBoards = async (req, res) => {
  const motherboards = await motherboard.find(req.query);
  res.send(motherboards);
};

exports.findMotherboardById = async (req, res) => {
  const motherboardResult = await motherboard.findById(req.params.id);
  res.send(motherboardResult);
};
