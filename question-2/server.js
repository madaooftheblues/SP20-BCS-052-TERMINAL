const express = require("express");

const app = express();
app.use(express.json());

const todos = [
  { content: "Finish reading book", status: false },
  { content: "Take dog for walk", status: true },
];

app.get("/", (req, res) => {
  res.send("Welcome to your todos api");
});

app.get("/appi/todos", (req, res) => {
  if (!todos) res.status(400).send("No todos found");
  res.send(todos);
});

app.get("/api/todos/:index", (req, res) => {
  if (!todos[req.params.index])
    return res.status(400).send("todo does not exist");
  res.send(todos[req.params.index]);
});

app.put("/api/todos/:index", (req, res) => {
  todos[req.params.index] = req.body.content;
  todos[req.params.index] = req.body.status;
  res.send(todos[req.params.index]);
});

app.delete("/api/todos/:index", (req, res) => {
  todos.splice(req.params.index, 1);
  res.send(todos);
});

app.post("/api/todos/", (req, res) => {
  todos.push(req.body);
  res.send(todos);
});
