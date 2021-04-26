const User = require("../models/user.js");

exports.getUser = function (req, res){
    // console.log(req.get('secretkey'))
    if (!(req.query.id)){
        User.find({}, function(err, users){
            if (err) return console.log(err);
            res.send(users);
        })
    }
    else {
        const id = req.query.id;
        User.findOne({_id: id}, function (err, user) {
            if (err) return console.log(err);
            res.send(user);
        })
    }
};

exports.createUser = function (req, res){
    if (!(req.query.title || req.query.description)) return res.sendStatus(400);

    const userEmail =
    const userPassword =
    const userPhone =
    const userTodos =
    const user = new User

    User.save(function (err){
        if (err) return console.log(err);
        res.send("Added");
    })
};

exports.deleteUser = function (req, res){
    const id = req.query.id;
    User.deleteOne({_id:id}, function(err, user){
        if (err) return console.log(err);
        res.json({message: "Found and deleted"});
    })
};

exports.updateUser = function (req, res){
    const id = req.query.id;
    User.updateOne({_id:id}, {}, function(err, todo){
        if (err) return console.log(err);
        User.findOne({_id:id}, function(err, todo){
            if (err) return console.log(err);
            res.send(todo);
        })
    })
};