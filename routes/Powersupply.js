const express = require("express");
const router = express.Router();
const {
  getAllPowersupplies,
  findPowersupplyById,
} = require("../controllers/PowersupplyController");

router.route("/").get(getAllPowersupplies);

router.route("/:id").get(findPowersupplyById);

module.exports = router;
