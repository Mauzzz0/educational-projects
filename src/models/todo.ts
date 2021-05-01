import { getModelForClass, prop } from '@typegoose/typegoose';

class TodoClass {
    @prop()
    public title?: string;

    @prop()
    public description?: string;

    @prop()
    public isComplete?: boolean;
}

export const TodoModel = getModelForClass(TodoClass);
