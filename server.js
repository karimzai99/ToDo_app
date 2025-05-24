const express = require("express");
const app = express();

// data
const lists = require("./models/list_item.js");
const list = require("./models/list_item.js");

// MIDDLE WARE
require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(express.static("public")); // publlic folder connected

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
app.get("/", (req, res) => {
  res.send(list);
});

// INDEX route
app.get("/todo", (req, res) => {
  res.render("index.ejs", { lists });
});

// new route
app.get("/todo/new", (req, res) => {
  res.render("new.ejs");
});

// Create route
app.post("/todo", (req, res) => {
  req.body.isDone = req.body.isDone === "on" ? true : false;
  list.push(req.body);

  res.redirect("/todo");
});

// show route
app.get("/todo/:index", (req, res) => {
  //   res.send(req.params.index);
  const list = lists[req.params.index];
  res.render("view.ejs", { list });
});

app.listen(port, (req, res) => {
  console.log(`app is working at port ${port}`);
});
