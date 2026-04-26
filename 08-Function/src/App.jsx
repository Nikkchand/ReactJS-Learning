import React from 'react'

const App = () => {
  // function btnClicked(elem){
  //   console.log(elem)
  // }

 const scroll = (elem) => {
  if(elem>0){
    console.log('Scrolling Down');
  }else{
    console.log('Scrolling Up');
    
  }
     
 }

  return (
    // <div>
    //   <button onClick={(elem) => {
    //     console.log(elem) 
    //   }
    //   }>Click Here</button>
    // </div>


    // <div>
    //   <input onChange={ (elem)=>{
    //     console.log(elem.target.value);
    //   } }
    //   type="text" placeholder='Enter name' />
    // </div>

      <div onWheel={(elem)=>{
          scroll(elem.deltaY)
        
      }
      }>
        <div className="page1">page1</div>
        <div className="page2">page2</div>
        <div className="page3">page3</div>
      </div>
     

    
  )
}

export default App
