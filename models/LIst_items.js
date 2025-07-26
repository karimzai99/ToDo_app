const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: String,
  desciption: String,
  isDone: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
/**[
  {
    toDo: "homework",
    description: "have to done my home work",
    isDone: true,
  },
  {
    toDo: "wash dishes",
    description: "need to finishe it by tonight",
    isDone: false,
  },
]; */
