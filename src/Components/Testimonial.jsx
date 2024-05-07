import React from "react";

const Testimonial = () => {
    return (
        <section className="testimonials" data-aos="fade-up">
            <div className="section-header text-center p-5">
                <h6 className="monospace text-lighter">TESTIMONIALS</h6>
                <h1 className="display-5" style={{ fontFamily: 'Amatic SC', sansSerif: '' }}>WHAT ARE THEY <span className="text-danger">SAYING ABOUT US</span></h1>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="col-lg-8 align-item-center" data-aos="fade-up" data-aos-delay="100">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide p-5" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex" data-bs-interval="10000">
                                <div className="row">
                                    <div className="fw-normal fst-italic pe-4 col-lg-8 ">
                                        <p className="text-bold"><i className="bi bi-quote quote-icon-left text-danger fs-3"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bi bi-quote quote-icon-right text-danger fs-3"></i></p>
                                        <h4>Saul Goodman</h4>
                                        <h5>Ceo &amp; Founder</h5>
                                        <div className="stars">
                                            <i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-item-center justify-content-center col-lg-4 ">
                                        <img src="./src/images/testimonials/testimonials-1.jpg" className=" img-fluid border border-5 rounded-circle h-75" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <div className="row">
                                    <div className="fw-normal fst-italic pe-4 col-lg-8 ">
                                        <p className="text-bold"><i className="bi bi-quote quote-icon-left text-danger fs-3"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bi bi-quote quote-icon-right text-danger fs-3"></i></p>
                                        <h4>Sara Wilsson</h4>
                                        <h5>Designer</h5>
                                        <div className="stars">
                                            <i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-item-center justify-content-center col-lg-4 ">
                                        <img src="./src/images/testimonials/testimonials-2.jpg" className=" img-fluid border border-5 rounded-circle h-75" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="fw-normal fst-italic pe-4 col-lg-8 ">
                                        <p className="text-bold"><i className="bi bi-quote quote-icon-left text-danger fs-3"></i>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i className="bi bi-quote quote-icon-right text-danger fs-3"></i></p>
                                        <h4>Jena Karlis</h4>
                                        <h5>Store Owner</h5>
                                        <div className="stars">
                                            <i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-item-center justify-content-center col-lg-4 ">
                                        <img src="./src/images/testimonials/testimonials-3.jpg" className=" img-fluid border border-5 rounded-circle h-75" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                </div>
            
                   
        </section>
    );
};

export default Testimonial;
