const cpu = require("../models/CpuModel");

exports.getAllCpus = async (req, res) => {
  const cpus = await cpu.find(req.query);
  res.send(cpus);
};

exports.findById = async (req, res) => {
  const cpu = await cpu.findById(req.params.id);
  res.send(cpu);
};
