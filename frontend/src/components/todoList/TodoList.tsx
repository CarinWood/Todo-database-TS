import React, {useState} from 'react';
import './todoList.css'
import InputArea from '../inputArea/InputArea';
import TodoApiService from '../../api/services/TodoApiService';
import Placeholder from '../placeholder/Placeholder';
import Card from '../card/Card';


const TodoList = () => {
    const [todos, setTodos] = useState([])

    interface Todo {
        task: string
        name: string
        done: string
        _id: string
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

            <div className="cards">
                    {todos.length > 0
                    ? todos.map((todo:Todo) => <Card id={todo._id} task={todo.task} name={todo.name} done={todo.done}/>)
                    : <Placeholder/> }
             </div>
    
        </div>
    )
}


export default TodoList