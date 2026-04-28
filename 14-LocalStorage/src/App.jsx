import React from 'react'

const App = () => {
  //  localStorage.clear()  //used to clear local storage
   
  // localStorage.setItem('user','Rahul chand')   // used to set item at local storage
  // localStorage.setItem('age',20)
  // localStorage.setItem('marks',72)

  // localStorage.removeItem('marks')   // used to remove item in local storage


//  const user = localStorage.getItem('user')  //used to get item in console from local storage
//  const age = localStorage.getItem('age')
//   console.log(user,age);
  
 const users =  {
   name: 'Rahul chand',
   age: 20, 
   city: 'Gaya Jii',
 }
 console.log(users);

 localStorage.setItem('users',JSON.stringify(users))  // stringify - used to change object to string
 
 //JSON.parse// used to change string to object
 
localStorage.clear()

  return (
    <div>
      Rahul chand
    </div>
  )
}

export default App
