import React, { useState } from 'react'

const App = () => {

  let [num, setNum] = useState(0)

  function IncreaseNum(){
    setNum(num+1)
  }
  
 function DecreaseNum(){
    setNum(num-1)
  }
  function Jump5Num(){
    setNum(num+5)
  }
  function down5Num(){
    setNum(num-5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      <button onClick={Jump5Num}>Increase by 5</button>
      <button onClick={down5Num}>decrease by 5</button>
    </div>
  )
}

export default App
