import React from "react";
const ChefsCard = (chefs) => {
    return (
        <div className="col-lg-4" >
            <div className="card" id="card1">
                <div className="card-body">
                    <img src={chefs.img} alt="" className="img-fluid" />
                </div>
                <div className="card-footer">
                    <div className="text-center pt-4">
                        <h3>{chefs.three}</h3>
                        <p className="fw-normal">{chefs.p1}</p>
                        <p className="fw-normal">{chefs.p2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChefsCard