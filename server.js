const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser')
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.use("/contractors", require("./routes/contractorsRouter"));

app.listen(port, () => console.log(`Server run on port ${port}`));
