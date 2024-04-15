import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/1054269786/photo/small-house-and-rice-terraces-field-at-pabongpaing-village-rice-terraces-mae-jam-chiang-mai.jpg?s=1024x1024&w=is&k=20&c=t0XMl05ZXZHEOjS9cxRywlN3nc9v-Olvg7KwtdPdBKk=')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    // Clean up function to remove the background image when the component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundSize = "";
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="border rounded border-3 col-sm-6 p-5">
            <div className="row border border-rounded p-2">
              <div className="col-sm-6 p-3 p-sm-1">From</div>
              <div className="col-sm-6 text-end p-sm-1 p-3">waseem</div>
              <div className="col">
                <input type="number" className='form-control'/>
              </div>
              <div className="col text-end">
                <select name="" id="" className='form-select border-white'></select>
              </div>
            </div>

            <div className="row border border-rounded p-2 mt-3">
              <div className="col-sm-6 p-3">From</div>
              <div className="col-sm-6 text-end p-3">waseem</div>
              <div className="col-sm-6">
                <input type="number" className='form-control'/>
              </div>
              <div className="col-sm-6 text-end">
                <select name="" id="" className='form-select border-white'></select>
              </div>
            </div>

            <div className="row mt-3">
              <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
