import React, {FC} from 'react'
import './inputArea.css'
import { BsPencilFill } from 'react-icons/bs';

const inputArea:FC = () => {
  return (
    <div className="input-container">
        <h1 className='todo-heading'>Todo List <BsPencilFill/></h1>
            <div className="input-fields">
                <input className="input-task" placeholder='Task' />
                <input className="input-name" placeholder='Your name'/>
                <button className="add-btn">Add Todo</button>
            </div>
        
    </div>
  )
}

export default inputArea