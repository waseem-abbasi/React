import { useState,useCallback,useEffect,useRef } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

// import './App.css'

function App() {
  //body color change
  document.body.style ="background-color:grey";

  //variable ko treck karne ke liye useState ka yse hoa hai
  const [length, setLength] = useState(8);
  const[numberAllowed,setnumberAllowed] = useState(false);
  const[charAllowed,setcharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  //1 funtion ko multi par call karne par purana input use kar sake (useCallback)
  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNIOPQRSTUVWXYZ";

    //this condition checkbox check and uncheck
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "()*&^%$#@!";

    //random password lene ke liye
    for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random() * str.length + 1);  
        pass += str.charAt(char);
    }

    //value read
    setPassword(pass);

  }, [length,numberAllowed,charAllowed]);

  //this hock use to call function  bar bar
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator]);

  //kisi bhi tag regrence lene ke liye iska use kya jata hai
  const passowordRef = useRef(null);

  //copy to clipboard
  const copyPassword = useCallback(() => {
    passowordRef.current?.select();
    //minimum selectin
    passowordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
    
  },[password]);

  return (
    <>
      <div className="container">
        <div className='bg-dark border rounded col-sm-6 col-lg-8 mx-auto p-4 mt-5 '>
          <div className="row  ">
            <div className="col-lg-8 pe-0 ">
              <input type="text" className='form-control' value={password} readOnly placeholder='passoword' ref={passowordRef}/>
            </div> 
              <button  className="  btn btn-primary col-lg-3  border ps-0" type="button" onClick={copyPassword}> copy</button>
          </div>

          <div className="row">
            <div className='col-lg-5  p-3'>
              
              <input type="range" className=" col-lg-5" min={6} max={80} value={length} 
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label className='ms-3 text-info'>length:{length}</label>
            </div>
            <div className="col-lg-3 p-3 ">
              <input  type="checkbox" 
                      className='form-check-input' 
                      defaultChecked={numberAllowed}
                      onChange={()=> {
                        setnumberAllowed((prev) => !prev)
                      }}
                      />
              <label className='ms-1 text-info'>Numbers</label>
            </div>
            <div className="col-lg-3 p-3 ">
              <input  type="checkbox" 
                      className='form-check-input' 
                      defaultChecked={charAllowed}
                      onChange={()=> {
                        setcharAllowed((prev) => !prev)
                      }}
                      />
              <label className='ms-1 text-info'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
