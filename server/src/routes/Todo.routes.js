import TodoController from "../controllers/Todo.controller.js";

const routes = (app) => {

    app.post('/todo', TodoController.createTodo)
    app.get('/todo', TodoController.getAllTodos)
    app.put('/done/:todoId', TodoController.updateDone)
    app.get('/uncompleted', TodoController.getUncompletedTodos)
    app.get('/completed', TodoController.getCompletedTodos)
    app.put('/todo/:todoId', TodoController.updateTask)
    app.put('/name/:todoId', TodoController.updateName)
    app.put('/color/:todoId', TodoController.updateColor)
    app.delete('/todo/:todoId', TodoController.deleteTodo)
    app.get('/peach', TodoController.getAllPeach)
    app.get('/green', TodoController.getAllGreen)
    app.get('/yellow', TodoController.getAllYellow)
    app.get('/blue', TodoController.getAllBlue)
   

}

export default {
    routes
}