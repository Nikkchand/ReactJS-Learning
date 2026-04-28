import axios from 'axios'
import { useState } from 'react'

const App = () => {

const [data, setData] = useState([])

//Api calling using fetch() , using async & awwait method 

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  //   const data =await response.json()

  //   console.log(data)
    
  // }


// Api calling using Axios

    const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data);
    
    }
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem,idx){
         return <h3>{idx} hello{elem.url}</h3>
         })} 
        
      </div>
    </div>
  )
}

export default App
