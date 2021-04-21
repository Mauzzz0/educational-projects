const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoScheme = new Schema({
    title: String,
    description: String,
    isComplete: Boolean
});

module.exports = mongoose.model("Todo", todoScheme)