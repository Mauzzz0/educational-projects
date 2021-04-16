var todo;
function get_schema_todo(){

    if (typeof(todo) === 'undefined'){ // Singleton
        const mongoose = require('mongoose');
        const todoSchema = new mongoose.Schema({
            title : String,
            description : String,
            isComplete: {type: Boolean, "default" : false}
        });
        todo = mongoose.model('ToDo', todoSchema)
    }

    return todo;
}

exports.get_schema_todo = get_schema_todo