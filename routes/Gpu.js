const express = require("express");
const router = express.Router();
const { getAllGpus, findGpuById } = require("../controllers/GpuController");

router.route("/").get(getAllGpus);

router.route("/:id").get(findGpuById);

module.exports = router;
