import TodoController from "../controllers/Todo.controller.js";

const routes = (app) => {

    app.post('/todo', TodoController.createTodo)
}

export default {
    routes
}