import React from 'react';

const About = () => {
    return (
        <section className="bg-light" >
            <div className="container" data-aos="fade-up">
                <h6 className="text-center pt-5 monospace text-lighter">ABOUT</h6>
                <p className="text-center pt-2 display-5" style={{ fontFamily: "'Amatic SC', sans-serif" }}>LEARN MORE <span className="text-danger">ABOUT US</span></p>

                <div className="row">
                    <div className="col-lg-7" style={{ backgroundImage: 'url(./src/images/about1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} data-aos="fade-up" data-aos-delay="150">
                        <div className="d-flex align-items-end justify-content-center" style={{ minHeight: '700px' }}>
                            <div className="bg-light text-center w-75 p-3">
                                <h4>Book a Table</h4>
                                <p className="text-danger fw-bold fs-2">+1 5589 55488 55</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 p-4" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="fst-italic fs-6 fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>

                        <ul className="fs-6 fw-normal ps-0 pt-3">
                            <li className="d-flex" style={{ listStyle: 'none' }}><i className="bi bi-check2-all text-danger fs-5 pe-2"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li className="d-flex pt-2" style={{ listStyle: 'none' }}><i className="bi bi-check2-all fs-5 text-danger pe-2"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li className="d-flex pt-2" style={{ listStyle: 'none' }}><i className="bi bi-check2-all fs-5 text-danger pe-2"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>

                        <p className="fs-6 fw-normal pt-2">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </p>

                        <div className="mt-4">
                            <img src="./src/images/about-2.jpg" className="img-fluid" alt="" />
                            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
