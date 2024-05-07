import React from "react";
import CountUp from "react-countup";

const CounterCard = () => {
    return (
        <>
            <div className="counter">
                <h1>
                    <CountUp start={0} end={1000} duration={2} delay={0} />
                </h1>
            </div>
        </>
    )
}
export default CounterCard