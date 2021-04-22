const express = require("express");
const todoController = require("../controllers/todoController");
const todoRouter = express.Router();

todoRouter.post("/create", todoController.createTodo);
todoRouter.get("/get", todoController.getTodo);
todoRouter.delete("/delete", todoController.deleteTodo);
todoRouter.put("/update", todoController.updateTodo);

module.exports = todoRouter;