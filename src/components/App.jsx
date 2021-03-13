import React, { useState } from "react";



var Isdisabled=false

function App() {

  var [init,setState]=useState(0)
var [initcon,fncond]=useState(false)

  function Increment()
  {
    
  
  setState(init+1)
  
  }
  
  function Decrement()
  {
setState(init-1)
init===1 && fncond(true)
}




return(<div>
    <h1>{init}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement} disabled={initcon}>-</button>
   </div >);
}

export default App;
