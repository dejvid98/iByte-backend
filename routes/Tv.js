const express = require("express");
const router = express.Router();
const { getAllTv, findTvById } = require("../controllers/TVController");

router.route("/").get(getAllTv);

router.route("/:id").get(findTvById);

module.exports = router;
