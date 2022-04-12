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
      updateTask: (id: string, newTask: string) => void
    }



const Card:React.FC<Props> = ({task, name, done, id, deleteTodo, updateTask}) => {

const [showMenu, setShowMenu] = useState(false)
const [showEditWindow, setShowEditWindow] = useState(false)
const [pink, setPink] = useState(false)
const [purple, setPurple] = useState(false)
const [blue, setBlue] = useState(false)
const [green, setGreen] = useState(false)


const menuClick = () => {
  setShowMenu(!showMenu)

}

const openWindow = () => {
  setShowEditWindow(!showEditWindow)
} 


const chooseGreen = () => {
  setGreen(true)
  setPurple(false)
  setPink(false)
  setBlue(false)
}


const choosePurple = () => {
  setPurple(true)
  setGreen(false)
  setPink(false)
  setBlue(false)
}

const choosePink = () => {
  setPink(true)
  setPurple(false)
  setGreen(false)
  setBlue(false)
}

const chooseBlue = () => {
  setBlue(true)
  setPink(false)
  setPurple(false)
  setGreen(false)
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
          <div className='color-div'><section className='box' onClick={() => choosePink()}>{pink && <BsCheckLg className='check'/>}</section><p className='color pink'>Pink</p></div>
          <div className='color-div'><section className='box' onClick={() => chooseGreen()}>{green && <BsCheckLg className='check'/>}</section><p className='color green'>Green</p></div>
          <div className='color-div'><section className='box' onClick={() => choosePurple()}>{purple && <BsCheckLg className='check'/>}</section><p className='color purple'>Purple</p></div>
          <div className='color-div'><section className='box'  onClick={() => chooseBlue()}>{blue && <BsCheckLg className='check'/>}</section><p className='color blue'>Blue</p></div>
        </section>}
        
        <h2 className='task-text' onClick={() =>openWindow()}>{task}</h2>
        <h3 className='name-text'>{name}</h3>

        {showEditWindow === true && <EditWindow task={task} id={id} updateTask={updateTask} openWindow={openWindow}/>}
    </div>
  )
}

export default Card