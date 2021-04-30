const mongoose = require("mongoose");
const Todo = require("./todo")

const Schema = mongoose.Schema;

const userScheme = new Schema({
    email: String,
    password: String,
    phone: String,
    toDoList: [Todo]
});

module.exports = mongoose.model("User", userScheme)