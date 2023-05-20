const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const path = require("path");

app.use(express.static(path.join(path.join(__dirname, "public"))));
app.use(bodyParser.urlencoded({ extended: true }));

// Template engine
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
); //đổi tên đuôi file .handlebars thành .hbs thì những cái nào có chữ handlebars phải đổi thành .hbs hết và thêm cái extname
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/img/1", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "img", "1.jpg"));
});

app.listen(2000, function (req, res) {
  console.log("Server is running");
});
