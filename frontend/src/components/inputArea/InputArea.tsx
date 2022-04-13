import React, {FC, useState} from 'react'
import './inputArea.css'
import { BsPencilFill, BsSearch, BsCheckLg } from 'react-icons/bs';


interface Props {
  addNewTodo: (value1: string, value2: string) => void;
  getAllCompleted: () => void; 
  getAll: () => void
  getAllUnompleted: () => void
  
}

const InputArea:FC<Props> = ({addNewTodo, getAllCompleted, getAll, getAllUnompleted}) => {

    const [taskValue, setTaskValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [completed, setCompleted] = useState(false)
    const [uncompleted, setUncompleted] = useState(false)
    const [all, setAll] = useState(false)
   

    const handleClick = () => {
      addNewTodo(taskValue, nameValue);
      setTaskValue('');
      setNameValue('');
    }

    const searchForCompleted = () => {
        setCompleted(true)
        setAll(false)
        setUncompleted(false)
        getAllCompleted()
    }

    const searchForAll = () => {
      setAll(true)
      setCompleted(false)
      setUncompleted(false)
      getAll()

    }

    const searchForUncompleted = () => {
      setAll(false)
      setCompleted(false)
      setUncompleted(true)
      getAllUnompleted()

    }

  
   

  return (
    <div className="input-container">
        <h1 className='todo-heading'>Add todo <BsPencilFill/></h1>
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
                    


                <button className="add-btn" onClick={()=> handleClick()}>Add</button>
            </div>

            <p className="search">Search</p>

            <section className='box-area'>
            <div className='all-div'><section className='checkbox' onClick={() => searchForAll()}>{all && <BsCheckLg className="checkmark"/>}</section><p className='all-choice'>All</p></div>
            <div className='completed-div'><section className='checkbox'onClick={() => searchForCompleted()}>{completed && <BsCheckLg className="checkmark"/>}</section><p className='completed-choice'>Completed</p></div>
            <div className='uncompleted-div'><section className='checkbox' onClick={() => searchForUncompleted()}>{uncompleted && <BsCheckLg className="checkmark"/>}</section><p className='uncompleted-choice'>Uncompleted</p></div>
            </section>
           

              
            
    </div>
  )
}

export default InputArea