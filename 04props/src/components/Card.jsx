import React from 'react'
function Card({cardname = "only card",text}){
    
    return (
        <div className="container">
            <div className="card" >
              <img src="https://images.pexels.com/photos/20696165/pexels-photo-20696165/free-photo-of-a-surfer-walks-out-of-the-water-and-into-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{cardname}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{text}</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div> 
    )
}
export default Card 