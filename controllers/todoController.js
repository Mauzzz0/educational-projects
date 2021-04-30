const Todo = require("../models/todo.js");
const { throwError } = require("../utils/utils")

const getTodo = async (req, res, next) => {
    // console.log(req.get('secretkey'))
    //throwError(400, "Incorrect shota")
    if (!req.query.id) {
        const todoList = await Todo.find({});
        res.status(200).json(todoList);
    } else {
        const todo = await Todo.findOne({_id: req.query.id});
        res.status(200).json(todo);
    }
};

const createTodo = async (req, res) => {
    if (!(req.query.title || req.query.description)) return res.sendStatus(400);
    const todoTitle = req.query.title;
    const todoDescription = req.query.description;
    const todoIsComplete = req.query.isComplete;
    const todo = new Todo({title: todoTitle, description: todoDescription, isComplete: todoIsComplete});
    const todoSave = await todo.save();
    res.status(200).json(todoSave);
};

const deleteTodo = async (req, res) => {
    const id = req.query.id;
    if (!id) throwError(400, "Incorrect id");
    const todoDelete = await Todo.deleteOne({_id: id});
};

const updateTodo = async (req, res) => {
    const id = req.query.id;
    if (!id) throwError(400, "Incorrect id");
    // TODO: фиксануть апдейт
    const todoUpdate = await Todo.updateOne({_id: id}, {title: 'title after upd', description: 'description after upd'})
    res.status(200).json(todoUpdate)
    // TODO: как при апдейте вывести обновлённый элемент?
};

module.exports = {
    createTodo,
    getTodo,
    deleteTodo,
    updateTodo,
}