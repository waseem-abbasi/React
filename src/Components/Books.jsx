import React from "react";

const Books = () => {
  return (
    <section id="book"  >
      <div className="section-header text-center p-5">
        <h6 className="monospace text-lighter">Events</h6>
        <h1 className="display-5" style={{ fontFamily: 'Amatic SC, sans-serif' }}>Book <span className="text-danger">Your Stay</span> with us</h1>
      </div>
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-4 image" style={{ backgroundImage: "url(./src/images/reservation.jpg)" }} data-aos="fade-down" data-aos-delay="200">
          </div>
          <div className="col-lg-8 p-5 book-form1">
            <form action="" className="p-5" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" placeholder="Your Phone" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" placeholder="Your Phone" />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-danger rounded-pill mt-5 p-2">Book a Table</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
