import './card.css'
import { IoClose } from 'react-icons/io5';
import {useState} from 'react'
import { BsCheckLg } from "react-icons/bs";
import EditWindow from '../editWindow/EditWindow';



interface Props {
      task: string
      name: string
      done: string
      id: string
      deleteTodo: (id: string) => void
    }



const Card:React.FC<Props> = ({task, name, done, id, deleteTodo}) => {

const [showMenu, setShowMenu] = useState(false)
const [showEditWindow, setShowEditWindow] = useState(false)


const menuClick = () => {
  setShowMenu(!showMenu)

}

const openWindow = () => {
  setShowEditWindow(true)
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
          <p className="completed"><BsCheckLg className="red-check"/> Mark as Completed</p>
          <p className='uncompleted'><BsCheckLg className="green-check"/> Mark as Uncompleted</p>
        </section>}
        
        <h2 className='task-text' onClick={() =>openWindow()}>{task}</h2>
        <h3 className='name-text'>{name}</h3>

        {showEditWindow === true && <EditWindow task={task}/>}
    </div>
  )
}

export default Card