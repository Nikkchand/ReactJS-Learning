import React, { useEffect, useState } from 'react'



const App = () => {
  const [num, setNum] = useState(0)

  const [num2, setNum2] = useState(100)


  function numChanging(){
    console.log('num ki value change ho gyi');   
  }

  function num2Changing(){
    console.log('num2 ki value change ho gyi');   
  }

  useEffect(function(){
    num2Changing();
  },[num2])

  useEffect(function(){
   numChanging();
  },[num])

  return (

    <div>
      <h1> Num {num}</h1>
      <h2>Num2 {num2}</h2>
      <button onClick= { ()=>{
        setNum(num+1)
        }}>
        click</button>

        <button onClick={()=>{
          setNum2(num2+1)
        }}>click</button>

      
      
    </div>
  )
}

export default App
