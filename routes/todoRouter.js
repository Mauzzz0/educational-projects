const express = require("express");
const todoController = require("../controllers/todoController");
const todoRouter = express.Router();

todoRouter.post("/create", todoController.createTodo);

module.exports = todoRouter;