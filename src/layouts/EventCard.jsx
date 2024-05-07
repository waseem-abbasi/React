import React from "react";

const EventCard = (event) => {
    return (
        <>
            <div className="col-lg-4 border border-light d-flex " id="event1" style={
                event.styles
            }
            >
                <div className=" mt-auto">
                    <h3 className="text-light pb-3">{event.three}</h3>
                    <h2 className="text-danger fw-bold pb-3 ">{event.two}</h2>
                    <p className="text-light fw-normal pb-5"> {event.para}</p>
                </div>
            </div>
        </>
    )
}
export default EventCard