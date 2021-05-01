import { TodoModel } from "../models/todo";


export class TodoService {

    static async getByIdOrAll(id: string) {
        let result;

        if (typeof (id) == 'string') {
            result = await TodoModel.find({ _id: id }).exec();
        }
        else {
            result = await TodoModel.find({}).exec();
        }

        return result;
    }

    static async create(title: string, description: string, iscomplete: boolean) {
        var todo = new TodoModel({ title: title, description: description, isComplete: iscomplete });
        await todo.save();

        return todo;
    }

    static async delete(id: string) {
        const result = await TodoModel.findByIdAndDelete({ _id: id });

        return result;
    }

    static async update(id: string, title: string, description: string, iscomplete: boolean) {

        const result = await TodoModel.findByIdAndUpdate({ _id: id }, { title: title, description: description, isComplete: iscomplete }, { new: true });

        return result;
    }
}