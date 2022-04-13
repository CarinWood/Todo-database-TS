import React, {FC, useState} from 'react'
import './editName.css'

interface Props {
    name: string
    id: string
    updateName: (id: string, newName: string) => void
    openNameWindow: () => void
}

const EditName: FC<Props> = ({name, id, updateName, openNameWindow}) => {

    const [nameValue, setNameValue] = useState(name)

    const handleNameChange = () => {
      updateName(id, nameValue)
      openNameWindow()
    }

  return (
    <div>
        <input
            className='edit-name'
            type= "text"
            maxLength={15}
            value={nameValue}
            onChange={e => setNameValue(e.target.value)}
        />

        <button onClick={()=> handleNameChange()} className='done-btn'>Done</button>
    </div>
  )
}

export default EditName