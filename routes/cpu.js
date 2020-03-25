const express = require("express");
const router = express.Router();
const { getAllCpus, findById } = require("../controllers/CpuController");

router.route("/").get(getAllCpus);

router.route("/:id").get(findById);

module.exports = router;
