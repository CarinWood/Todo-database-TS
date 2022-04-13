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
    },

    updateDone: (id: string, done: object) => {
        return http.put(`/done/${id}`, done)
    },

    getDone: (done: object) => {
        return http.get('/completed', done)
    },

    getUncompleted: (done: object) => {
        return http.get('/uncompleted', done)
    },

    getAll: () => {
        return http.get('/todo')
    }


}


export default TodoApiService