import React from 'react';
import Whycard from './../layouts/Whycard'
const Why = () => {
    return (
        <section >
            <div className="container p-5" data-aos="fade-up">
                <div className="row p-2">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="box border border-dark bg-danger p-4">
                            <h1 id="why-p1" className="text-bold text-light pb-2">Why Choose <br />Yummy?</h1>
                            <p id="why-p2" className="fs-6 fw-normal text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                            <div className="d-flex justify-content-center align-item-center p-3">
                                <button className="btn btn-outline-light rounded-pill">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 p-3 d-flex align-item-center">
                        <div className="row">
                            <div className="col-xl-4 p-2" data-aos="fade-up" data-aos-delay="200">
                                <Whycard
                                    paragraph1="Corporis voluptates officia eiusmod"
                                    paragraph2="Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
                                    icon={<i className="bi bi-clipboard-data fs-2 text-danger"></i>}
                                />

                            </div>
                               
                            <div className="col-xl-4 p-2" data-aos="fade-up" data-aos-delay="300">
                            <Whycard
                                    paragraph1="Ullamco laboris ladore pan"
                                    paragraph2="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
                                    icon={<i className="bi bi-gem fs-2 text-danger"></i>}
                                />
                            </div>

                                        
                            <div className="col-xl-4 p-2" data-aos="fade-up" data-aos-delay="400">
                            <Whycard
                                    paragraph1="Labore consequatur incidid dolore"
                                    paragraph2="Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
                                    icon={<i className="bi bi-inboxes fs-2 text-danger"></i>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
