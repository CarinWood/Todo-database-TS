import TodoModel from "../models/Todo.model.js";

const createTodo = async (req, res) => {
        const todo = new TodoModel({
            task: req.body.task,
            name: req.body.name,
            done: req.body.done,
            color: req.body.color
        })

        try {
            await todo.save()
            const response = await TodoModel.find()
            res.status(201).send(response)

        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

const getAllTodos = async (req, res) => {

    try {
    const response = await TodoModel.find()
    res.status(200).send(response)
    } 
    
    catch(error) 
    {
        res.status(500).send({message: error.message})
    }

}

const getCompletedTodos = async (req, res) => {
    try {
        const response = await TodoModel.find({done: 'true'})
        res.status(200).send(response)
       
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}

const getUncompletedTodos = async (req, res) => {
    try {
        const response = await TodoModel.find({done: 'false'})
        res.status(200).send(response)
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}

const getAllPeach = async (req, res) => {
    try {
        const response = await TodoModel.find({color: 'peach'})
        res.status(200).send(response)
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}

const getAllGreen = async (req, res) => {
    try {
        const response = await TodoModel.find({color: 'green'})
        res.status(200).send(response)
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}
const getAllYellow = async (req, res) => {
    try {
        const response = await TodoModel.find({color: 'yellow'})
        res.status(200).send(response)
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}
const getAllBlue = async (req, res) => {
    try {
        const response = await TodoModel.find({color: 'blue'})
        res.status(200).send(response)
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}


const updateTask = async (req,res) => {
    try {
        await TodoModel.findByIdAndUpdate(req.params.todoId, {
            task: req.body.task
        }, {new: true})
       
        const response = await TodoModel.find()
        res.status(200).send(response)
    } 
    
    catch(error) {
        res.status(500).send({message: error.message})
    }
}
const updateName = async (req,res) => {
    try {
        await TodoModel.findByIdAndUpdate(req.params.todoId, {
            name: req.body.name
        }, {new: true})
       
        const response = await TodoModel.find()
        res.status(200).send(response)
    } 
    
    catch(error) {
        res.status(500).send({message: error.message})
    }
}

const updateDone = async (req, res) => {
    try {
        await TodoModel.findByIdAndUpdate(req.params.todoId, {
            done: req.body.done
        }, {new: true})
        const response = await TodoModel.find()
        res.status(200).send(response)
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}

const updateColor = async (req, res) => {
    try {
        await TodoModel.findByIdAndUpdate(req.params.todoId, {
            color: req.body.color
        }, {new: true})
        const response = await TodoModel.find()
        res.status(200).send(response)
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}


const deleteTodo = async (req, res) => {
    try {
        await TodoModel.findByIdAndDelete(req.params.todoId)
        const response = await TodoModel.find()
        res.status(201).send(response)

    } catch(error) {
        res.status(500).send({
            message: error.message
        })

    }
}



export default {
    createTodo,
    getAllTodos,
    getCompletedTodos,
    getUncompletedTodos,
    updateTask,
    updateDone,
    deleteTodo,
    updateColor,
    updateName,
    getAllPeach,
    getAllGreen,
    getAllYellow,
    getAllBlue
    


}