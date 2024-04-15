import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  //hocks
    let [val,setVal] = useState(2);
    const addValue=()=>{
      console.log(`before${val}`);
        if(val <= 4){
          setVal(++val);
          console.log(val);
        }
        else{
          prompt("Value is greater than 20");
        }
      }
  //Remove
      
      const remValue=()=>{
        console.clear;
        console.log(val)
        setVal(val--);
      }


  return (
      
    <>
      <div id="border">
        <h1>Counter</h1>      
        <h2>value:{val}</h2>
        <button onClick={addValue}>Add</button>
        <button onClick={remValue}> Remove</button>
      </div>
    </>
  )
}

export default App
