const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HOLA AMIGO</h1>");
});

module.exports = app;
