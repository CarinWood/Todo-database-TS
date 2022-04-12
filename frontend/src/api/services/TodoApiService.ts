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
    }
}


export default TodoApiService