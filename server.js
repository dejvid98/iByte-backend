const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ram = require("./models/ramModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DB;

try {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log("DB connection successful!"));
} catch (e) {
  console.log(e);
}

const port = 3000;

app.listen(port, () => {
  console.log("Server is running...");
});

