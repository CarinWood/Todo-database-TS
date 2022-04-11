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
        <IoClose className='close'/>
        <h2>{task}</h2>
        <h3>{name}</h3>
    </div>
  )
}

export default Card