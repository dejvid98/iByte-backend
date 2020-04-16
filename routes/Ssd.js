const express = require("express");
const router = express.Router();
const { getAllSsds, findSsdById } = require("../controllers/SsdControllers");

router.route("/").get(getAllSsds);

router.route("/:id").get(findSsdById);

module.exports = router;
