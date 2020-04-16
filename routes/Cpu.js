const express = require("express");
const router = express.Router();
const { getAllCpus, findCpuById } = require("../controllers/CpuController");

router.route("/").get(getAllCpus);

router.route("/:id").get(findCpuById);

module.exports = router;
