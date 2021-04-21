exports.addTodo = function (req, res){
    res.send("Добавление тудушки");
};

exports.getTodo = function (req, res){
    res.send("Запрос тудушки");
};

exports.createTodo = function (req, res){
    res.send("Создание тудушки");
};

exports.deleteTodo = function (req, res){
    res.send("Удаление тудушки");
};

exports.updateTodo = function (req, res){
    res.send("Обновление тудушки");
};

