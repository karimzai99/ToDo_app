// 1. database connection
const Todo = require("../models/LIst_items");

// express
const express = require("express");
// router
const router = express.Router();
// data
const lists = require("../models/list_item.js");
const list = require("../models/list_item.js");

//
// router.get("/", (req, res) => {
//   res.send(list);
// });

// seed data

router.get("/seed", (req, res) => {
  //   res.send("seeding data");
  Todo.insertMany([
    {
      todo: "homework",
      description: "do it tonight",
      isDone: true,
    },
    {
      todo: "grocery",
      description: "ask hameeda",
      isDone: false,
    },
  ]).then((responseDb) => {
    console.log(responseDb);
    res.send(responseDb);
  });
});

// INDEX route
router.get("/", async (req, res) => {
  //  res.render("index.ejs", { lists });
  try {
    const todos = await Todo.find();
    res.render("index.ejs", { todos });
  } catch (err) {
    console.log(err);
  }
});

// new route
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// DELETE route
router.delete("/:id", async (req, res) => {
  // lists.splice(req.params.id, 1);
  // res.redirect("/todo");
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect("/todo");
  } catch (err) {
    res.json(err);
  }
});

// update route
router.put("/:id", (req, res) => {
  lists[req.params.id].isDone = !lists[req.params.id].isDone;
  res.redirect("/todo");
});

// Create route
router.post("/", async (req, res) => {
  // req.body.isDone = req.body.isDone === "on" ? true : false;
  // list.push(req.body);
  //
  // res.redirect("/todo");
  try {
    const { todo, description } = req.body;
    await Todo.create({
      todo,
      description,
      isDone: req.body.isDone === "on",
    });
    res.redirect("/todo");
  } catch (err) {
    console.log(err);
  }
});

// edit route

router.get("/:index/edit", (req, res) => {
  res.render("edit.ejs", {
    list: lists[req.params.index],
    index: req.params.index,
  });
});

// show route
router.get("/:index", (req, res) => {
  //   res.send(req.params.index);
  const list = lists[req.params.index];
  const parm = req.params.index;
  res.render("view.ejs", { list, parm });
});

module.exports = router;
