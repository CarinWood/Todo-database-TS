import React, {FC, useState} from 'react'
import './inputArea.css'
import { BsPencilFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

interface Props {
  addNewTodo: (value1: string, value2: string) => void;
}

const InputArea:FC<Props> = ({addNewTodo}) => {

    const [taskValue, setTaskValue] = useState('')
    const [nameValue, setNameValue] = useState('')

    const handleClick = () => {
      addNewTodo(taskValue, nameValue);
      setTaskValue('');
      setNameValue('');
    }

   

  return (
    <div className="input-container">
        <h1 className='todo-heading'>Todo List <BsPencilFill/></h1>
            <div className="input-fields">
                 
                        <input 
                            className="input-task" 
                            placeholder='Task' 
                            value={taskValue} 
                            onChange={(event) => setTaskValue(event.target.value)}
                        />
                       
                 
                <input 
                    className="input-name" 
                    placeholder='Your name'
                    value={nameValue}
                    onChange={(event) => setNameValue(event.target.value)}
                />
                    


                <button className="add-btn" onClick={()=> handleClick()}>Add Todo</button>
            </div>
        
    </div>
  )
}

export default InputArea