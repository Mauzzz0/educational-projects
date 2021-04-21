const Todo = require("../models/todo.js");

exports.addTodo = function (req, res){
    res.send("Добавление тудушки");
};

exports.getTodo = function (req, res){
    res.send("Запрос тудушки");
};

exports.createTodo = function (req, res){
    if (!(req.query.title || req.query.description) ) return res.sendStatus(400);
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
    res.send("Удаление тудушки");
};

exports.updateTodo = function (req, res){
    res.send("Обновление тудушки");
};

