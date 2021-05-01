import  mongoose  from 'mongoose'

const Schema = mongoose.Schema;

const todoScheme = new Schema({
    title: String,
    description: String,
    isComplete: Boolean
});

export default mongoose.model("Todo", todoScheme)