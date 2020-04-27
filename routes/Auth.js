const express = require("express");
const router = express.Router();
const { register } = require("../controllers/AuthController");

router.route("/").post(register);

module.exports = router;
