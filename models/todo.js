const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoScheme = new Schema({
    title: String,
    description: String,
    isComplete: Number
});

module.exports = mongoose.model("Todo", todoScheme)