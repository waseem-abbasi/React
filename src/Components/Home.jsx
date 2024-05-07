import React from 'react';

const Home = () => {
    return (
        <section  className="mt-5 p-5 " style={{ backgroundColor: '#eee' }}>
            <div className="row mt-5 container" >
                <div className="col-lg-6 order-2 order-lg-1 pt-5">
                    <h2 className="display-1 fw-lighter" style={{ fontFamily: "'Amatic SC', sans-serif" }} data-aos="fade-up">Enjoy Your Healthy<br />Delicious Food</h2>
                    <h5 className="pt-3" style={{ fontFamily: "'Open Sans', sans-serif" }} data-aos="fade-up" data-aos-delay="100">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</h5>
                    <div className="pt-5" data-aos="fade-up" data-aos-delay="200">
                        <button className="btn btn-danger border rounded-pill" type="submit">Book a Table</button>
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="text-decoration-none p-3 fs-3">
                            <i className="bi bi-play-circle text-danger"></i>
                            <span className="fs-5 p-3 fw-bolder text-dark">Watch Video</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center " style={{ height: '500px' }}>
                    <img src="./src/images/food2.png" alt="" className="img-fluid" data-aos="zoom-out" data-aos-delay="300" / >
                </div>
            </div>
        </section>
    );
};

export default Home;
