import React, {useState} from 'react';
import './todoList.css'
import InputArea from '../inputArea/InputArea';
import TodoApiService from '../../api/services/TodoApiService';
import Placeholder from '../placeholder/Placeholder';


const TodoList = () => {
    const [todos, setTodos] = useState([])

    interface Todo {
        task: String
        name: String
        done: String
    }


   const getTodos = () =>  {
        TodoApiService.getAllTodos()
        .then((response) => {
            setTodos(response.data)
        })
        .catch((error) => console.log(error))
    }
    
    

    return (
        <div className='todo-list'>
            <InputArea/>
            <button onClick={() => getTodos()}>Get Todos</button>
            
            {todos.length > 0
             ? todos.map((todo:Todo) => <p>{todo.task}</p>)
             : <Placeholder/> }
    
        </div>
    )
}


export default TodoList