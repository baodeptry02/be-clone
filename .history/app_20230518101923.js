const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const path = require("path");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, function (req, res) {
  console.log("Server is running");
});
