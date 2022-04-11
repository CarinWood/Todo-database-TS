import http from '../MyApi'

const getAllTodos = () => {
    return http.get('/todo')
}




export default {
    getAllTodos
    
}