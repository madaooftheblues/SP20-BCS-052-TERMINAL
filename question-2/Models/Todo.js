const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  content: String,
  status: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.export = Todo;
