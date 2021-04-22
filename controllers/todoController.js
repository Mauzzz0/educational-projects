const Todo = require("../models/todo.js");

exports.getTodo = function (req, res){
    if (!(req.query.id)){
        Todo.find({}, function(err, todos){
            if (err) return console.log(err);
            res.send(todos);
        })
    }
    else {
        const id = req.query.id;
        Todo.findOne({_id: id}, function (err, todo) {
            if (err) return console.log(err);
            res.send(todo);
        })
    }
};

exports.createTodo = function (req, res){
    if (!(req.query.title || req.query.description)) return res.sendStatus(400);
    const todoTitle = req.query.title;
    const todoDescription = req.query.description;
    const todoIsComplete = req.query.isComplete;
    const todo = new Todo({title: todoTitle, description: todoDescription, isComplete: todoIsComplete});

    todo.save(function (err){
        if (err) return console.log(err);
        res.send("Added");
    })
};

exports.deleteTodo = function (req, res){
    const id = req.query.id;
    Todo.deleteOne({_id:id}, function(err, todo){
        if (err) return console.log(err);
        res.json({message: "Found and deleted"});
    })
};

exports.updateTodo = function (req, res){
    const id = req.query.id;
    Todo.updateOne({_id:id}, {title: 'title after upd', description: 'description after upd'}, function(err, todo){
        if (err) return console.log(err);
        Todo.findOne({_id:id}, function(err, todo){
            if (err) return console.log(err);
            res.send(todo);
        })
    })
};