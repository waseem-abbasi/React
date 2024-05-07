import React from "react";
import Header from "../layouts/Header";
import ChefsCard from "../layouts/ChefsCard";

// images
import img from'../../src/images/chefs/chefs-1.jpg'
import img2 from'../../src/images/chefs/chefs-2.jpg'
import img3 from'../../src/images/chefs/chefs-3.jpg'
const Chefs = () => {
  return (
    <section id="chefs" className="pb-5 " data-aos="fade-up" >
      <div className="container" >
        <Header  six="CHEFS" one="OUR" two={<span className='text-danger'>PROFESSIONAL</span>}  three="CHEFS"/>
        

        <div className="row">
          <ChefsCard img ={img} three="Walter White" p1="Master Chef" p2="Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."/>
          <ChefsCard img ={img2} three="Sarah Jhonson" p1="Pattisier" p2="Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente."/>
          <ChefsCard img ={img3} three="William Anderson" p1="Cook" p2="Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae."/>
          
          
        </div>
      </div>
    </section>
  );
};

export default Chefs;
