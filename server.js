const express = require("express");
const app = express();
const methodOverRide = require("method-override");

// data
const lists = require("./models/list_item.js");
const list = require("./models/list_item.js");

// MIDDLE WARE
require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(express.static("public")); // publlic folder connected

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverRide("_method"));

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

// DELETE route
app.delete("/todo/:index", (req, res) => {
  lists.splice(req.params.index, 1);
  res.redirect("/todo");
});

// update route
app.put("/todo/:khar", (req, res) => {
  lists[req.params.khar].isDone = !lists[req.params.khar].isDone;
  res.redirect("/todo");
});

// Create route
app.post("/todo", (req, res) => {
  req.body.isDone = req.body.isDone === "on" ? true : false;
  list.push(req.body);

  res.redirect("/todo");
});

// edit route

app.get("/todo/:index/edit", (req, res) => {
  res.render("edit.ejs", {
    list: lists[req.params.index],
    index: req.params.index,
  });
});

// show route
app.get("/todo/:index", (req, res) => {
  //   res.send(req.params.index);
  const list = lists[req.params.index];
  const parm = req.params.index;
  res.render("view.ejs", { list, parm });
});

app.listen(port, (req, res) => {
  console.log(`app is working at port ${port}`);
});
