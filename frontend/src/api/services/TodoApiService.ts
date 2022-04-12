import http from '../MyApi'

const TodoApiService = {
    getAllTodos: () => {
        return http.get('/todo')
    },

    deleteTodo: (id: string) => {
        return http.delete(`/todo/${id}`)
    }
}


export default TodoApiService