import mongoose from 'mongoose'

import Todo from "./todo"

const Schema = mongoose.Schema;

const userScheme = new Schema({
    email: String,
    password: String,
    phone: String,
    toDoList: [Todo]
});

export default mongoose.model("User", userScheme)