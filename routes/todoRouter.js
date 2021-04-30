const express = require("express");
const todoController = require("../controllers/todoController");
const { asyncHandler } = require("../middlewares/middleware");
const todoRouter = express.Router();


todoRouter.post("/create", asyncHandler(todoController.createTodo));
todoRouter.get("/get", asyncHandler(todoController.getTodo));
todoRouter.delete("/delete", asyncHandler(todoController.deleteTodo));
todoRouter.put("/update", asyncHandler(todoController.updateTodo));
// TODO: put -> path
module.exports = todoRouter;