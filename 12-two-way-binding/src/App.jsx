import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState(' ')

  const submitHandler = (e) => {
      e.preventDefault()
      console.log('Form submitted by',title);
      
      setTitle('')
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>Name:
        <input 
        type="text" 
        placeholder='Enter your name' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          
        }}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App
