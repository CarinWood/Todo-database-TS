import './card.css'
import { IoClose } from 'react-icons/io5';
import TodoApiService from '../../api/services/TodoApiService'
import {useState} from 'react'

interface Props {
      task: string
      name: string
      done: string
      id: string
      deleteTodo: (id: string) => void
    }



const Card:React.FC<Props> = ({task, name, done, id, deleteTodo}) => {

const [showMenu, setShowMenu] = useState(false)

const menuClick = () => {
  setShowMenu(!showMenu)
  console.log(showMenu)
}
  
  


  return (
    <div className='card'>
        <div className='card-header'>
              <div className='dot-area' onClick= {() => menuClick()}>
                    ...
              </div>

              <div className='close-area'>
                    <IoClose onClick={() => deleteTodo(id)} className='close'/>
              </div>
            
        </div>
        {showMenu === true && <section className='menu'>
          <p>Edit Task</p>
          <p>Mark as Completed</p>
          <p>Mark as Uncompleted</p>
        </section>}
        
        <h2 className='task-text'>{task}</h2>
        <h3 className='name-text'>{name}</h3>
    </div>
  )
}

export default Card