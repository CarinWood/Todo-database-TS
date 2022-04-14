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
    <>
        <input 
            type="text"
            maxLength={18}
            className='edit-input'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            

        />
        
        <button className='done-btn' onClick={() => handleButtonClick()}>Done</button>
        
    </>
  )
}

export default EditWindow