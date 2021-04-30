const Todo = require('../models/todo')

export class TodoService {
    static async getById(id: String){
        let result
        if (id == 'null') {
            result = await Todo.find({});
        } else {
            result = await Todo.findOne({_id: id});
        }

        return {
            message: 'Ok',
            todo: result
        }
    }
}