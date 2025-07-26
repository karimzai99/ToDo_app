const express = require("express");
const app = express();
const methodOverRide = require("method-override");
const todoControllers = require("./controllers/TodoControllers.js");

// data

// MIDDLE WARE
require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(express.static("public")); // publlic folder connected

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverRide("_method"));

// routes
app.use("/todo", todoControllers);

app.listen(port, (req, res) => {
  console.log(`app is working at port ${port}`);
});
