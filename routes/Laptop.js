const express = require("express");
const router = express.Router();
const { getAllLaptops, findLaptopById } = require("../controllers/LaptopController");

router.route("/").get(getAllLaptops);

router.route("/:id").get(findLaptopById);

module.exports = router;
