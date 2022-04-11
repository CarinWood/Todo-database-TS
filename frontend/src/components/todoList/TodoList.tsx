import React, {useState} from 'react';
import './todoList.css'
import InputArea from '../inputArea/InputArea';
import TodoApiService from '../../api/services/TodoApiService';


const TodoList = () => {
    const [todos, setTodos] = useState([])


   const getTodos = () =>  {
        TodoApiService.getAllTodos()
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => console.log(error))
    }
    

    return (
        <div className='todo-list'>
            <InputArea/>
            <button onClick={() => getTodos()}>Get Todos</button>
    
        </div>
    )
}


export default TodoList