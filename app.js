const express = require("express");

const cpu = require("./routes/cpu");
const gpu = require("./routes/gpu");
const ram = require("./routes/ram");
const ssd = require("./routes/ssd");
const motherboard = require("./routes/motherboard");
const powersupply = require("./routes/powersupply");

const app = express();

// Bodyparses middleware
app.use(express.json({ extended: true }));

app.use("/api/cpu", cpu);
app.use("/api/gpu", gpu);
app.use("/api/motherboard", motherboard);
app.use("/api/powersupply", powersupply);
app.use("/api/ram", ram);
app.use("/api/ssd", ssd);

app.get("/", (req, res) => {
  res.send("<h1>HOLA AMIGO</h1>");
});

module.exports = app;
