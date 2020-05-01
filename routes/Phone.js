const express = require("express");
const router = express.Router();
const { getAllPhones, findPhoneById } = require("../controllers/PhoneController");

router.route("/").get(getAllPhones);

router.route("/:id").get(findPhoneById);

module.exports = router;
