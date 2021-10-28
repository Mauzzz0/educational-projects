import { TodoModel } from "../models/todo";
import { throwError } from "../utils/utils"


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

    static async create(title: string, description: string, iscomplete: boolean, userid: string) {
        var todo = new TodoModel({ title: title, description: description, isComplete: iscomplete, userId: userid });
        await todo.save();

        return todo;
    }

    static async delete(id: string) {
        if (!id) throwError(400, "No ID exposed in the request body");
        
        const result = await TodoModel.findByIdAndDelete({ _id: id });

        return result;
    }

    static async update(id: string, title: string, description: string, iscomplete: boolean) {
        if (!id) throwError(400, "No ID exposed in the request body");
        if (!await TodoModel.exists({_id:id})) throwError(400, "ID doesn't exist")


        const result = await TodoModel.findByIdAndUpdate({ _id: id }, { title: title, description: description, isComplete: iscomplete }, { new: true });
                                                                // TODO: Сделать проверку на null, чтобы можно было частично обновлять данные.
        return result;
    }
}