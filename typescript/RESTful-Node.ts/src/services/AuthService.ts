import { UserModel } from "../models/user";
import { throwError } from "../utils/utils";


export class AuthService{

    static async login(email: string, password: string){
        const user = await UserModel.findOne({email:email});
        let result;

        if (user === null) {
            result = throwError(404, "User not found");
        }
        else if (user?.password == password) {
            // TODO: Достаточно ли двух или надо три =?
            // TODO: Есть ли "правильное расположение" в таких сравнениях? Или можно местами поменять юзр.пас и пас?
            result = {"userId" : user?.id}
        }
        else {
            result = throwError(422, "Incorrect password" );
        }
        // TODO: Неправильный пароль обрабатывать throwError'ом или резалтом с кодом(422) и месседжем "инкоррект пасворд"?

        return result;
    }
}