import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
    {
        task: String,
        name: String,
        done: String,
    }, {timestamps: true}
) 

const TodoModel = mongoose.model('todo', TodoSchema)

export default TodoModel