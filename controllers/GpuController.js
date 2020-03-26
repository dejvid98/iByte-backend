const gpu = require("../models/GpuModel");

exports.getAllGpus = async (req, res) => {
  const gpus = await gpu.find(req.query);
  res.send(gpus);
};

exports.findGpuById = async (req, res) => {
  const gpuResult = await gpu.findById(req.params.id);
  res.send(gpuResult);
};
