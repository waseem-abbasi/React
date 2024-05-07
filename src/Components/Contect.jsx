import React from "react";

const Contact = () => {
  return (
    <section id="contect" data-aos="fade-up">
      <div className="container">
        <div className="section-header text-center p-5">
          <h6 className="monospace text-lighter">Events</h6>
          <h1 className="display-5" style={{ fontFamily: 'Amatic SC, sans-serif' }}>Need Help? <span className="text-danger">Contact Us</span> with us</h1>
        </div>

        <div className="mb-3" >
          <iframe title="Google Map" style={{ border: 0, width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="row gy-4" >
          <div className="col-md-6" >
            <div className="d-flex align-items-center justify-content-center border p-3">
              <div className="border rounded-circle bg-danger me-4 p-3">
                <i className="icon bi bi-map flex-shrink-0 fs-3 text-light"></i>
              </div>
              <div>
                <h4 className="fw-bold">Our Address</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center justify-content-center border p-3">
              <div className="border rounded-circle bg-danger me-4 p-3">
                <i className="icon bi bi-envelope flex-shrink-0 fs-3 text-light"></i>
              </div>
              <div>
                <h4 className="fw-bold">Email Us</h4>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-item border d-flex align-items-center justify-content-center p-3">
              <div className="border rounded-circle bg-danger me-4 p-3">
                <i className="icon bi bi-telephone flex-shrink-0 text-light fs-3"></i>
              </div>
              <div>
                <h4 className="fw-bold">Call Us</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center justify-content-center border p-3 ">
              <div className="border rounded-circle bg-danger me-4 p-3">
                <i className="icon bi bi-share flex-shrink-0 text-light fs-3"></i>
              </div>
              <div>
                <h4 className="fw-bold">Opening Hours</h4>
                <div><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</div>
              </div>
            </div>
          </div>
        </div>
        <form action="" className="my-5 border p-5 " id="book-form2" data-aos="flip-left">
          <div className="row">
            <div className="col-xl-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-xl-6 form-group">
              <input type="text" name="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group pt-4">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group pt-4">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="text-center pt-5">
            <button type="submit" className="btn btn-danger rounded-pill">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
