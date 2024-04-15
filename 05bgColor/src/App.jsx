import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'



function App() {
  let [color, setColor] = useState("skyblue")

  function setColour (newColor){
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
    
  }

  return (
    <>
    

      <div className="container p-5 ">
        <div className="row bg-info p-3 rounded " id="box">
          <div className="col-lg-1 border rounded m-2" onClick={setColour}>Black</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => {setColour("red")}}>red</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => {setColour("orange")}}>orange</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => setColour("blue")} >blue</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => setColour("green")} >green</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => setColour("skyblue")} >skyblue</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => setColour("yellow")} >yellow</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => setColour("pink")}>pink</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => setColour("purple")}>purple</div>
          <div className="col-lg-1 border rounded m-2" onClick={() => setColour("white")}>white</div>
        </div>
      </div>
    </>
  )
}

export default App
