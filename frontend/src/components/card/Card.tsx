import './card.css'
import { IoClose } from 'react-icons/io5';

interface Props {
      task: string
      name: string
      done: string

    }


const Card:React.FC<Props> = ({task, name, done}) => {
  return (
    <div className='card'>
        <div className='card-header'>
            <IoClose className='close'/>
        </div>
        
        <h2 className='task-text'>{task}</h2>
        <h3 className='name-text'>{name}</h3>
    </div>
  )
}

export default Card