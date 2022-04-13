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
        color: string
       

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
                done: "false",
                color: "peach"
            }

            TodoApiService.addNewTodo(newTodo)
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }


    
  const updateTask = (_id: string, _newTask: string) => {
    const _task = {
        'task': _newTask
    }

    TodoApiService.updateTask(_id, _task)
    .then(response => {
        setTodos(response.data)
    })
    .catch(error => console.log(error))
}

const updateName = (_id: string, _newName: string) => {
  const newName = {
    "name": _newName
  }

    TodoApiService.updateName(_id, newName)
    .then(response => {
      setTodos(response.data)
    })
    .catch(error => console.log(error))
}

const chooseColor = (id: string, choosenColor: string) => {
    const color = {
      "color": choosenColor
    }
  
    TodoApiService.updateColor(id, color)
    .then(response => {
      setTodos(response.data)
    })
    .catch(error => console.log(error))
  }

  const setTodoCompleted = (id: string) => {
    const done = {
      "done": "true"
    }
    TodoApiService.updateDone(id, done)
    .then(response => {
      setTodos(response.data)
    })
    .catch(error => console.log(error))

  }
  const setTodoUncompleted = (id: string) => {
    const done = {
      "done": "false"
    }
    TodoApiService.updateDone(id, done)
    .then(response => {
      setTodos(response.data)
    })
    .catch(error => console.log(error))

  }


  const getAllCompleted = () => {
      const done = {
        "done": "true"
      }
     
      TodoApiService.getDone(done) 
      .then(response => {
        setTodos(response.data)
      })
      .catch(error => console.log(error))
  }
  const getAllUnompleted = () => {
      const done = {
        "done": "false"
      }
     
      TodoApiService.getUncompleted(done) 
      .then(response => {
        setTodos(response.data)
      })
      .catch(error => console.log(error))
  }

  const getAll = () => {

    TodoApiService.getAll()
    .then(response => {
      setTodos(response.data)
    })
    .catch(error => console.log(error))
  }

   const getPeach = () => {
     TodoApiService.getAllPeach()
     .then(response => {
       setTodos(response.data)
     })
     .catch(error => console.log(error))
   }

   const getGreen = () => {
     TodoApiService.getAllGreen()
     .then(response => {
       setTodos(response.data)
     })
     .catch(error => console.log(error))
   }
  
    

    return (
        <div className='todo-list'>
            <InputArea addNewTodo={addNewTodo} getAllCompleted={getAllCompleted} getAll={getAll} getAllUnompleted={getAllUnompleted} getPeach={getPeach} getGreen={getGreen}/>

            <div className="cards">
                    {todos.length > 0
                    ? todos.map((todo:Todo) => <Card id={todo._id} task={todo.task} name={todo.name} done={todo.done} color={todo.color} deleteTodo={deleteTodo} updateTask={updateTask} updateName={updateName} chooseColor={chooseColor} setTodoCompleted={setTodoCompleted} setTodoUncompleted={setTodoUncompleted}/>)
                    : <Placeholder/> }

                    
             </div>
    
        </div>
    )
}


export default TodoList