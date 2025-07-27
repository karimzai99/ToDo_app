// 1. database connection
const Todo = require("../models/LIst_items");

// express
const express = require("express");
// router
const router = express.Router();

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
  try {
    const todos = await Todo.find();
    res.render("index.ejs", { todos });
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
});

// new route
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// DELETE route
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect("/todo");
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
});

// update route
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    await Todo.findByIdAndUpdate(req.params.id, {
      todo: req.body.todo,
      description: req.body.description,
    });

    res.redirect("/todo");
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
});

router.put("/toggle/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    await Todo.findByIdAndUpdate(req.params.id, {
      isDone: !todo.isDone,
    });

    res.redirect("/todo");
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
});

// Create route
router.post("/", async (req, res) => {
  try {
    const { todo, description } = req.body;
    await Todo.create({
      todo,
      description,
      isDone: req.body.isDone === "on",
    });
    res.redirect("/todo");
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
});

// edit route
router.get("/:id/edit", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.render("edit", { todo });
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
});

// show route
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).send("Todo not found");
    res.render("view", { todo });
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
});

module.exports = router;
