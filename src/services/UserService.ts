import { UserModel } from "../models/user"
import { throwError } from "../utils/utils"

export class UserService{
    static async getByIdOrAll(id: string) {
        let result;

        if (typeof (id) == 'string') {
            result = await UserModel.find({ _id: id }).exec();
        }
        else {
            result = await UserModel.find({}).exec();
        }

        return result;
    }

    static async create(email: string, password: string, phone: string) {
        var newUser = new UserModel({ email: email, password: password, phone: phone });
        const oldUser = await UserModel.findOne({email:email});
        let result;

        if (oldUser == null){
            await newUser.save();
            result = newUser;
        }
        else{
            throwError(400, 'This email already exist');
        }

        return result;
    }

    static async delete(id: string) {
        if (!id) throwError(400, "No ID exposed in the request body");
        
        const result = await UserModel.findByIdAndDelete({ _id: id });

        return result;
    }

    static async update(id: string, email: string, password: string, phone: string) {
        if (!id) throwError(400, "No ID exposed in the request body");
        if (!await UserModel.exists({_id:id})) throwError(400, "ID doesn't exist")


        const result = await UserModel.findByIdAndUpdate({ _id: id }, { email: email, password: password, phone: phone }, { new: true });
                                                                // TODO: Сделать проверку на null, чтобы можно было частично обновлять данные.
        return result;
    }
}