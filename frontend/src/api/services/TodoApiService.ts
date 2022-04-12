import http from '../MyApi'

const TodoApiService = {
    getAllTodos: () => {
        return http.get('/todo')
    },

    deleteTodo: (id: string) => {
        return http.delete(`/todo/${id}`)
    },

    addNewTodo: (newTodo: object) => {
        return http.post('/todo', newTodo)
    },

    updateTask: (id: string, newTask: object) => {
        return http.put(`/todo/${id}`, newTask)
    }
}


export default TodoApiService