import React from "react";

const Why = (props) => {
    return (
        <div className="icon-box1 d-flex flex-column justify-content-center align-items-center bg-light h-100 border border-rounded">
            <div className="border rounded-circle p-3 d-flex justify-content-center align-items-center" id='why-circle'>
                {props.icon}
            </div>
            <h4 className="p-3 " id='why-h4'>{props.paragraph1}</h4>
            <p className="p-3" id='why-p3'>{props.paragraph2}</p>
        </div>
    )
}
export default Why
