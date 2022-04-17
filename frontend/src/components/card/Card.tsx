import './card.css'
import { IoClose } from 'react-icons/io5';
import {useState} from 'react'
import { MdDone } from "react-icons/md";
import EditTask from '../editTask/EditTask';





interface Props {
      task: string
      name: string
      done: string
      id: string
      color: string
      deleteTodo: (id: string) => void
      updateTask: (id: string, newTask: string) => void
      chooseColor: (id: string, choosenColor: string) => void
      setTodoCompleted: (id: string) => void
      setTodoUncompleted: (id: string) => void
     
}



const Card:React.FC<Props> = ({task, name, done, id, deleteTodo, updateTask, color, chooseColor, setTodoCompleted, setTodoUncompleted}) => {

const [showMenu, setShowMenu] = useState(false)
const [showEditWindow, setShowEditWindow] = useState(false)
const [peach, setPeach] = useState(true)
const [yellow, setYellow] = useState(false)
const [blue, setBlue] = useState(false)
const [green, setGreen] = useState(false)
const [completed, setCompleted] = useState(false)
const [uncompleted, setUncompleted] = useState(true)



const menuClick = () => {
  setShowMenu(!showMenu)

}

const openWindow = () => {
  setShowEditWindow(!showEditWindow)
}   


const chooseYellow = () => {
  setYellow(true)
  setGreen(false)
  setPeach(false)
  setBlue(false)
  const choosenColor = 'yellow'
  chooseColor(id, choosenColor)
  setShowMenu(false)
}

const choosePeach = () => {
  setPeach(true)
  setYellow(false)
  setGreen(false)
  setBlue(false)
  const choosenColor = 'peach'
  chooseColor(id, choosenColor)
  setShowMenu(false)
}

const chooseBlue = () => {
  setBlue(true)
  setPeach(false)
  setYellow(false)
  setGreen(false)
  const choosenColor = 'blue'
  chooseColor(id, choosenColor)
  setShowMenu(false)
}

const chooseGreen = () => {
  setGreen(true)
  setYellow(false)
  setPeach(false)
  setBlue(false)
  const choosenColor = 'green'
  chooseColor(id, choosenColor)
  setShowMenu(false)
}

const decideClassName = () => {
  if (color === 'green') {
    return 'green'
  } else if (color === 'blue') {
    return 'blue'
  } else if (color === 'peach') {
    return 'peach'
  } else if (color === 'yellow') {
    return 'yellow'
  } else {
    return 'card-header'
  }
} 

const setCompletedFunc = () => {
    setCompleted(true)
    setUncompleted(false)
    setShowMenu(false)
    setTodoCompleted(id)
}

const setUncompletedFunc = () => {
  setUncompleted(true)
  setCompleted(false)
  setShowMenu(false)
  setTodoUncompleted(id) 
}






  return (
    <div className='card'>
        <div className={decideClassName()}>
              <div className='dot-area' onClick= {() => menuClick()}>
                    ...
              </div>

              <div className='close-area'>
                    <IoClose onClick={() => deleteTodo(id)} className='close'/>
              </div>
            
        </div>
        {showMenu === true && <section className='menu'>
          <div className='color-div'><section className='box' onClick={() => choosePeach()}>{color === "peach" && <MdDone className='check'/>}</section><p className='pink-color'><p className='pink-color-div'></p></p></div>
          <div className='color-div'><section className='box' onClick={() => chooseGreen()}>{color === "green" && <MdDone className='check'/>}</section><p className='green-color'><p className='green-color-div'></p></p></div>
          <div className='color-div'><section className='box' onClick={() => chooseYellow()}>{color === "yellow" && <MdDone className='check'/>}</section><p className='yellow-color'><p className='yellow-color-div'></p></p></div>
          <div className='color-div'><section className='box'  onClick={() => chooseBlue()}>{color === "blue" && <MdDone className='check'/>}</section><p className='blue-color'><p className='blue-color-div'></p></p></div>
          <div className='divider'></div>
          <section className='done-section'>
              <div className='completed-div'><section className='box' onClick={() => setCompletedFunc()}>{done === "true" &&  <MdDone className='check'/>}</section><p className='completed-text'>Completed</p></div>
              <div className='uncompleted-div'><section className='box' onClick={() => setUncompletedFunc()}>{done === "false" &&  <MdDone className='check'/>}</section><p className='uncompleted-text'>Uncompleted</p></div>
          </section>
        </section>}
        
        <h2 className={done === "true" ? 'task-text linethrough' : 'task-text'} onClick={() =>openWindow()}>{task}</h2>
        <h3 className='name-text'>{name}</h3>

        {showEditWindow === true && <EditTask task={task} id={id} updateTask={updateTask} openWindow={openWindow}/>}
      
    </div>
  )
}

export default Card