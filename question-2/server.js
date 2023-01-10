const express = require("express");

const app = express();
app.use(express.json());

const todos = [
  { content: "Finish reading book", status: false },
  { content: "Take dog for walk", status: true },
];
