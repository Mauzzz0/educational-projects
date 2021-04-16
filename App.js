function start_app(){
    const express = require('express');
    const cors = require('cors');
    const app = express();
    const todo = require('./Schemas').get_schema_todo();
    app.use(cors());

    app.all('/', (req, res) => {
        console.log('URL = ' + req.url);
        console.log('OURL = ' + req.originalUrl);
        console.log('METHOD = ' + req.method);
        console.log('HOST = ' + req.headers.host);
        console.log('IsSecure = ' + req.secure);
        
        res.status(200).json({message: 'All is ok!' });
    })
    
    app.post('/testPost', (req, res) => {
        res.status(200).json({ message: 'It is POST'});
    })
    
    app.get('/testGet', (req, res) => {
        res.status(200).json({ message: 'It is GET'});
    })
    
    app.delete('/testDelete', (req, res) => {
        res.status(400).json({ message: 'Sorry, this method not work'});
    })
    
    app.put('/testPut', (req, res) => {
        res.status(500).json({ message: 'Server error'});
    })
    
    app.patch('/testPatch', (req, res) => {
        res.status(403).json({ message: 'Your token incorrect'});
    })
    
    app.post('/addToDo', (req, res) => {
        res.status(200).json({ message: 'Add ToDo success'});
    })
    
    app.delete('/deleteToDo', (req, res) => {
        res.status(200).json({ message: 'Delete ToDo success'});
    })
    
    app.post('/updateToDo', (req, res) => {
        res.status(200).json({ message: 'Update ToDo success'});
    })
    
    app.post('/todoList', (req, res) => {
        let arr = [7];
        for (i=0; i<7; i++){
            arr[i] = {
                _id : i,
                title: 'Title',
                description: 'Description'
            }
        };
        res.status(200).json({ 
            todoList: arr
        });
    })
    
    app.get('/api/todos', (req, res) => {
        todo.find({}, function(err, todos){
            if (err) return console.log(err);
            res.send(todos);
        });
    })
    
    app.get('/api/todos/:id', (req, res) => {
        const id = req.params.id;
        todo.findOne({_id:id}, function(err, todo){
            if (err) return console.log(err);
            res.send(todo);
        });
    })
    
    app.post('/api/todo', (req, res) => {
        const created_todo = new todo({title: "Title "+ Date.now(), description: "Description " + Date.now()});
        created_todo.save(function(err, created_todo){
            if (err) return console.error(err);
            res.send(created_todo);
        });
    })
    
    app.delete('/api/todos/:id', (req, res) => {
        const id = req.params.id;
        todo.deleteOne({_id: id}, function(err, todo){
            if (err) return console.log(err);
            res.json({message: "Found and deleted"});
        })
    })
    
    app.put('/api/todos/:id', (req, res) => {
        const id = req.params.id;
        todo.updateOne({_id:id}, {title: 'title after upd', description: 'description after upd'}, function(err, todo){
            if (err) return console.log(err);
            todo.findOne({_id:id}, function(err, todo){
                if (err) return console.log(err);
                res.send(todo);
            });
        });
    })

    return app;
}

exports.start_app = start_app