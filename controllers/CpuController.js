const cpu = require("../models/CpuModel");

exports.getAllCpus = async (req, res) => {
  const cpus = await cpu.find(req.query);
  res.send(cpus);
};

exports.findCpuById = async (req, res) => {
  const cpuResult = await cpu.findById(req.params.id);
  res.send(cpuResult);
};
