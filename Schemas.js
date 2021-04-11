const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    isComplete: {type: Boolean, "default" : false}
});
const todo = mongoose.model('ToDo', todoSchema)