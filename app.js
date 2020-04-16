const express = require("express");

const cpu = require("./routes/Cpu");
const gpu = require("./routes/Gpu");
const laptop = require("./routes/Laptop");
const ram = require("./routes/Ram");
const ssd = require("./routes/Ssd");
const motherboard = require("./routes/Motherboard");
const powersupply = require("./routes/Powersupply");

const app = express();

// Bodyparses middleware
app.use(express.json({ extended: true }));

app.use("/api/cpu", cpu);
app.use("/api/gpu", gpu);
app.use("/api/laptop", laptop);
app.use("/api/motherboard", motherboard);
app.use("/api/powersupply", powersupply);
app.use("/api/ram", ram);
app.use("/api/ssd", ssd);


module.exports = app;
