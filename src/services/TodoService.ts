export class TodoService{
    static async getByIdOrAll(id: string) {
    let result;

    // if (typeof(id) == 'undefined' ) {
    //      result = await Todo.find({});
    // } else {
    //      result = await Todo.findOne({_id: id});
    // }
    // TODO: Чекнуть mongoose + TS, typegoose, mongoose types
    return {
        message : "OK"
        }
    }
}