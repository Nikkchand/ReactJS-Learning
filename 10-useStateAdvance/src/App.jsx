import React, { useState } from 'react'

const App = () => {

const [user, setuser] = useState({name:'Rahul chand' , age: 21})

  const changeUser = () => {
  //   const Newuser = {...user}
  //   Newuser.name = 'Keshar Kumar';
  //   Newuser.age = 23;
  //   setuser(Newuser);

  // or , in short we use prev =>
       
    setuser(prev => ({...prev, name:'Keshar Kumar', age:23}))
    
  }

 



  return (
    <div>
      <h1>My name is {user.name} and I am {user.age} years old.</h1>
      <button onClick={changeUser}>Clicke here</button>
    </div>
  )
}

export default App
