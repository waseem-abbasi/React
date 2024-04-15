import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [add, setAdd] = useState();

  const addition = () => {
    const inputNum1 = prompt("Enter the first number");
    const inputNum2 = prompt("Enter the second number");

    const parsedNum1 = parseInt(inputNum1);
    const parsedNum2 = parseInt(inputNum2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      setNum1(parsedNum1);
      setNum2(parsedNum2);

      const sum = parsedNum1 + parsedNum2;
      setAdd(sum);
    } else {
      alert("Invalid input. Please enter valid numbers.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="card col-sm-6 mx-auto">
          <div className="card-header fs-2 text-info">WA Technology</div>
          <div className="card-body">
            <div className="row p-3">
              <div className="col-sm-6 fs-4 m-2 border">number 1</div>
              <div className="col-sm-5 fs-4 m-2 border">{num1}</div>
              <div className="col-sm-6 fs-4 m-2 border">number 2</div>
              <div className="col-sm-5 fs-4 m-2 border">{num2}</div>
              <div className="col-sm-6 fs-4 m-2 border">Sum</div>
              <div className="col-sm-5 fs-4 m-2 border">{add}</div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <button className="btn btn-primary p-2" onClick={addition}>Click</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
