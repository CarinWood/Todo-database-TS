import './editWindow.css'

interface Props {
    task: string
}


const EditWindow: React.FC<Props> = ({task}) => {
  return (
    <div className='window'>
        <p className='edit-text'>Edit Todo Task:</p>
        <input 
            placeholder={task}
            type="text"
            className='edit-input'

        />
        <button className='done-btn'>Done</button>
        
    </div>
  )
}

export default EditWindow