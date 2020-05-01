const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

// Paste DB link here to connect
const DB =
"mongodb+srv://david:dakis9876@cluster0-zw4ea.mongodb.net/ibyte?retryWrites=true&w=majority";

try {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"));
} catch (e) {
  console.log(e);
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running...");
});
