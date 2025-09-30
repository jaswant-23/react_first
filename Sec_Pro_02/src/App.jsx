import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10) 
  //let [count_isvariable, setCount_isMethod] = useState(0)_IsHooks that is used to update the value dynamically in the UI.
  //Here count is variable and setCount is method that is used to update the value of count variable.
  //useState(0) is initial value of count variable.
  //You can use any name for variable and method but it's a good practice to use count and setCount.
  
  /*Here hooks used to update the value dynamically update in the UI. Without it you can't it.
  It's functionlity is done by the js as getElementbyID and then update it innerHTML and then appendchild it 
  its make easy in react.js */
  // let counter = 0;
  
  const increaseValue = () => {
    // count += 1;
    setCount(count<20 ? count + 1 : 20); // ternary operator to prevent values greater than 20
    console.log(count);
  }
  const decreaseValue = () => {

  setCount(count > 0 ? count - 1 : 0); // ternary operator to prevent negative values
  console.log(count);
  }


  return (
    <>
   
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <h3>Here is the your count {count}</h3>

       <button onClick={increaseValue}>Add Value</button>
       <button onClick={decreaseValue}>Substract counter</button>

      </div>
    </>
  )
}

export default App
