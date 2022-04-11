import TodoModel from "../models/Todo.model.js";

const createTodo = async (req, res) => {
        const todo = new TodoModel({
            task: req.body.task,
            name: req.body.name,
            done: req.body.done
        })

        try {
            await todo.save()
            const response = await TodoModel.find()
            res.status(201).send(response)

        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

export default {
    createTodo
}