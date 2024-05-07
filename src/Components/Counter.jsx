import React, { useState } from 'react';
//npm i react-countup
import CountUp from "react-countup";
//npm i react-scroll-trigger
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterStart, setCounterStart] = useState(false);

    const handleEnterViewport = () => {
        setCounterStart(true);
    };

    const handleExitViewport = () => {
        setCounterStart(false);
    };

    return (
        <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
            <section id="counter"   >
                <div className="container " >
                    <div className="row gy-4 " >
                        <div className="col-lg-3 col-md-6 p-3" >
                            <div className="stats-item text-light text-center fw-bold">
                                <h1 className="display-4 fw-bold counter" data-aos="zoom-in-up">
                                    <CountUp start={0} end={100} duration={5} redraw={true} startOnMount={false} endOnMount={counterStart} />
                                </h1>
                                <p className="fs-5">Projects</p>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="stats-item text-light text-center fw-bold">
                                <h1 className="display-4 fw-bold counter" data-aos="zoom-in-up">
                                    <CountUp start={0} end={400} duration={5} redraw={true} startOnMount={false} endOnMount={counterStart} />
                                </h1>
                                <p className="fs-5">Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="stats-item text-light text-center fw-bold">
                                <h1 className="display-4 fw-bold counter" data-aos="zoom-in-up">
                                    <CountUp start={0} end={300} duration={5} redraw={true} startOnMount={false} endOnMount={counterStart} />
                                </h1>
                                <p className="fs-5">Hours of Support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="stats-item text-light text-center fw-bold">
                                <h1 className="display-4 fw-bold counter" data-aos="zoom-in-up">
                                    <CountUp start={0} end={500} duration={7} redraw={true} startOnMount={false} endOnMount={counterStart} />
                                </h1>
                                <p className="fs-5">Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    );
};

export default Counter;
