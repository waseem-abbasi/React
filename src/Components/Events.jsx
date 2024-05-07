import React from "react";

import EventCard from "../layouts/EventCard";
import Header from "../layouts/Header";

const Events = () => {
  return (
    <>
      <div className="container-fluid bg-light" data-aos="fade-up">
        <Header six="CHEFS" one="SHARE" two={<span className='text-danger'>YOUR MOMENTS</span>} three="IN OUR RESTAURANT" />
        <div className="row pb-5" data-aos="fade-up" data-aos-delay="100">
          <EventCard styles={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../src/images/events-1.jpg")',
            backgroundSize: 'cover',
            height: '500px'
          }} three="Custom Parties" two="$99" para="Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas."
          />

          <EventCard styles={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../src/images/events-2.jpg")',
            backgroundSize: 'cover',
            height: '500px'
          }} three="Private Parties" two="$289" para="In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur."
          />

          <EventCard styles={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../src/images/events-3.jpg")',
            backgroundSize: 'cover',
            height: '500px'
          }} three="Birthday Parties" two="$499" para="Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis."
          />



        </div>
      </div>
    </>
  );
};

export default Events;
