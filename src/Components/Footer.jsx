import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row gy-3 p-5 ">
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon fs-3 pe-2"></i>
            <div>
              <h4>Address</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022 - US<br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-telephone icon fs-3 pe-2"></i>
            <div>
              <h4>Reservations</h4>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-clock icon fs-3 pe-2"></i>
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat:</strong> 11AM - 23PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="social-links d-flex fs-3 pe-2 ">
              <div className="border rounded-circle me-2 ">
                <a href="#" className="twitter p-2"><i className="bi bi-twitter text-light fs-4"></i></a>
              </div>
              <div className="border rounded-circle me-2 ">
                <a href="#" className="twitter p-2"><i className="bi bi-facebook text-light fs-4"></i></a>
              </div>
              <div className="border rounded-circle me-2 ">
                <a href="#" className="twitter p-2"><i className="bi bi-instagram text-light fs-4"></i></a>
              </div>
              <div className="border rounded-circle me-2 ">
                <a href="#" className="twitter p-2"><i className="bi bi-linkedin text-light fs-4"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="copyright">
          &copy; Copyright <strong><span>Waseem</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Waseem-Abbasi</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
