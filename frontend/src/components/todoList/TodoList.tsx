import React, {useState} from 'react';
import './todoList.css'
import InputArea from '../inputArea/InputArea';
import TodoApiService from '../../api/services/TodoApiService';
import Placeholder from '../placeholder/Placeholder';
import Card from '../card/Card';
import { BsListTask } from 'react-icons/bs';


const TodoList = () => {
    const [todos, setTodos] = useState([])


    interface Todo {
        task: string
        name: string
        done: string
        _id: string
    }


    const deleteTodo = (id: string) => {
        TodoApiService.deleteTodo(id)
        .then(response => {
          setTodos(response.data)
        })
        .catch(error => console.log(error))
      }


    const addNewTodo = (value1: string, value2: string) => {
            const newTodo = {
                task: value1,
                name: value2,
                done: "false"
            }

            TodoApiService.addNewTodo(newTodo)
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }

  
    

    return (
        <div className='todo-list'>
            <InputArea addNewTodo={addNewTodo} />

           

            <div className="cards">
                    {todos.length > 0
                    ? todos.map((todo:Todo) => <Card id={todo._id} task={todo.task} name={todo.name} done={todo.done} deleteTodo={deleteTodo} />)
                    : <Placeholder/> }

                    
             </div>
    
        </div>
    )
}


export default TodoList