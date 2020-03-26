const powersupply = require("../models/PowersupplyModel");

exports.getAllPowersupplies = async (req, res) => {
  const powersupplies = await powersupply.find(req.query);
  res.send(powersupplies);
};

exports.findPowersupplyById = async (req, res) => {
  const powersupplyResult = await powersupply.findById(req.params.id);
  res.send(powersupplyResult);
};
