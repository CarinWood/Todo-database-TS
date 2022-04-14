import './editTask.css'
import {useState} from 'react'
import TodoApiService from '../../api/services/TodoApiService'

interface Props {
    task: string
    id: string
    updateTask: (id: string, newTask: string) => void
    openWindow: () => void

}


const EditWindow: React.FC<Props> = ({task, id, updateTask, openWindow}) => {

    const [newTask, setNewTask] = useState(task)

    const handleButtonClick = () => {
            updateTask(id, newTask)
            openWindow()
    }

  return (
    <div className='edit-window'>
      <p className='edit-text'>Edit todo task:</p>
      
        <input 
            type="text"
            maxLength={40}
            className='edit-input'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            

        />
        
        <button className='done-btn' onClick={() => handleButtonClick()}>Done</button>
     
        
    </div>
  )
}

export default EditWindow