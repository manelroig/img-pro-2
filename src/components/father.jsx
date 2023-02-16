import React, {useState} from 'react'
import Child from './child'

const Father = () => {

  const [name, setName] = useState('Manel')

  function showMessage (text){
    alert(`SHOW ${text}`)
  }

  function updateName(newName){
    setName(newName)
  }

  return (
    <div style={{background:'#7f7f7f', padding:'50px'}}>
      <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}

export default Father