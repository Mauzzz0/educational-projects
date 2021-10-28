import { getModelForClass, prop } from '@typegoose/typegoose';

class TokenClass {
    @prop()
    public userId?: string;

    @prop()
    public accessToken?: string;

    @prop()
    public deviceId?: string;
}

export const TokenModel = getModelForClass(TokenClass);
