import React from "react"
import { Link } from 'react-scroll'
// layout
import Button from "../layouts/Button"
const Nav = () => {
  return (
    //  header Section 
    <header className="bg-light  p-2 fixed-top">
      <nav className="navbar navbar-expand-lg ">
        <div className="container ">

          <a className="navbar-brand fw-bold  fs-1" href="#">Resturent</a>

          <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body " id="nav">
              <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0  ">
                <li className=" pe-4 fw-bold fs-5  my-auto   ">
                  <Link to="home" spy={true} smooth={true} duration={500} >home</Link>
                </li>
                <li className="nav-item pe-4 fw-bold fs-5  my-auto   ">
                  <Link to="about" spy={true} smooth={true} duration={500} >About</Link>
                </li>
                
                <li className="nav-item pe-4 fw-bold fs-5  my-auto   ">
                  <Link to="menu" spy={true} smooth={true} duration={500} >menu</Link>
                </li>
                <li className="nav-item pe-4 fw-bold fs-5  my-auto   ">
                  <Link to="events" spy={true} smooth={true} duration={500} >Events</Link>
                </li>
                <li className="nav-item pe-4 fw-bold fs-5  my-auto   ">
                  <Link to="chefs" spy={true} smooth={true} duration={500} >Chefs</Link>
                </li>
                {/* <li className="nav-item pe-4 fw-bold fs-5  my-auto   ">
                  <Link to="gallery" spy={true} smooth={true} duration={500} >Gallery</Link>
                </li> */}
                <li className="nav-item dropdown pe-3 fw-bold">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item pe-4 fw-bold fs-5  my-auto   ">
                  <Link to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* //buttons */}
          <Button title="book a table" />



          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
    // header Closed  
  )
}
export default Nav