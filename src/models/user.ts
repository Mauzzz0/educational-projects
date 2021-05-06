import { getModelForClass, prop } from '@typegoose/typegoose';

class UserClass {
    @prop()
    public email?: string;

    @prop()
    public password?: string;

    @prop()
    public phone?: string;
}

export const UserModel = getModelForClass(UserClass);
