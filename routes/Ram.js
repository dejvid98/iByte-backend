const express = require("express");
const router = express.Router();
const { getAllRams, findRamById } = require("../controllers/RamController");

router.route("/").get(getAllRams);

router.route("/:id").get(findRamById);

module.exports = router;
