import React from 'react'
import Card from './Components/Card'
const App = () => {
  return (
    
    <div className='parent'>
     <Card user='Rahul chand' age = {20} img={'/public/rc.jpg'} para='I am RC'/>
     <Card user='Keshar Kumar' age = {21} img={'/public/ksr.jpg'} para='I am KSR'/>
     <Card user='Babloo Kumar' age = {22} img={'/public/bblu.jpg'} para='I am BB'/>
     <Card user='Shubham Kumar' age = {19} img={'/public/sbm.jpg'} para='I am SBM'/>
    </div>  
  )
}

export default App
