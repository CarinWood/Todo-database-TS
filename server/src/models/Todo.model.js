import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
    {
        task: String,
        name: String,
        done: String,
        color: String
    } 
) 

const TodoModel = mongoose.model('todo', TodoSchema)

export default TodoModel