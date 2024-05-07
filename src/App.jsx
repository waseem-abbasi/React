import React from 'react'

// Aos animation

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// components
import Nav from './Components/Nav.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Why from './Components/Why.jsx'
import Counter from './Components/Counter.jsx'
import Menu from './Components/Menu.jsx'
import Testimonial from './Components/Testimonial.jsx'
import Events from './Components/Events.jsx'
import Chefs from './Components/Chefs.jsx'
import Books from './Components/Books.jsx'
import Contact from './Components/Contect.jsx'
import Footer from './Components/Footer.jsx'
function App() {
  // Aos animation

  AOS.init({
    duration: 2000,
    once: false,
  })


  return (
    <>

      <Nav />
      <div id='home'>
        <Home />
      </div>
       <div id='about'>
        <About />
      </div>

      <Why />

      <Counter />
      <div id="menu">
        <Menu />
      </div>


      <Testimonial />

      <div id="events">
        <Events />
      </div>
       <div id="chefs">
        <Chefs />
      </div> 
      <div id="book">
        <Books />
      </div>
      <div id="contact">

        <Contact />
      </div>
      <Footer />
    </>


  )

}

export default App
