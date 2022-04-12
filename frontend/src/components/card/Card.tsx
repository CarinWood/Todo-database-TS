import './card.css'
import { IoClose } from 'react-icons/io5';
import TodoApiService from '../../api/services/TodoApiService'

interface Props {
      task: string
      name: string
      done: string
      id: string
    

    }



const Card:React.FC<Props> = ({task, name, done, id}) => {


  const deleteTodo = (id: string) => {
    TodoApiService.deleteTodo(id)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }
  


  return (
    <div className='card'>
        <div className='card-header'>
              <div className='close-area'>
                    <IoClose onClick={() => deleteTodo(id)} className='close'/>
              </div>
        </div>
        
        <h2 className='task-text'>{task}</h2>
        <h3 className='name-text'>{name}</h3>
    </div>
  )
}

export default Card