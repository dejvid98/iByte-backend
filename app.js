const express = require("express");

const auth = require("./routes/Auth");
const cpu = require("./routes/Cpu");
const gpu = require("./routes/Gpu");
const laptop = require("./routes/Laptop");
const ram = require("./routes/Ram");
const ssd = require("./routes/Ssd");
const motherboard = require("./routes/Motherboard");
const powersupply = require("./routes/Powersupply");
const phone = require("./routes/Phone");
const tv = require("./routes/Tv");

const app = express();

var cors = require("cors");

app.use(cors());

// Bodyparses middleware
app.use(express.json({ extended: true }));

app.use("/api/auth", auth);

app.use("/api/cpu", cpu);

app.use("/api/gpu", gpu);

app.use("/api/laptop", laptop);

app.use("/api/motherboard", motherboard);

app.use("/api/powersupply", powersupply);

app.use("/api/ram", ram);

app.use("/api/ssd", ssd);

app.use("/api/phone", phone);

app.use("/api/phone", tv);

module.exports = app;
