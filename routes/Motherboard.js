const express = require("express");
const router = express.Router();
const {
  getAllMotherBoards,
  findMotherboardById,
} = require("../controllers/MotherboardController");

router.route("/").get(getAllMotherBoards);

router.route("/:id").get(findMotherboardById);

module.exports = router;
