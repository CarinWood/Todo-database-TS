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
    },

    updateName: (id: string, newName: object) => {
        return http.put(`/name/${id}`, newName)
    },

    updateColor: (id: string, color: object) => {
        return http.put(`/color/${id}`, color)
    },

    searchByName: (_name: object) => {
        return http.get('/name', _name)
    }


}


export default TodoApiService