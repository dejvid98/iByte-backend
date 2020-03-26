const ssd = require("../models/SsdModel");

exports.getAllSsds = async (req, res) => {
  const ssds = await ssd.find(req.query);
  res.send(ssds);
};

exports.findSsdById = async (req, res) => {
  const ssdResult = await ssd.findById(req.params.id);
  res.send(ssdResult);
};
