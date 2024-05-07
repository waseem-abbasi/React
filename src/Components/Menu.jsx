import React from "react";
import { useState } from "react";
import Header from "../layouts/Header";
import MenuCard from "../layouts/MenuCard";









const Menu = () => {



    const [heading, setHeading] = useState('Starter');
    const [items, setItems] = useState(MenuCard);
    const Heading = (head) => {
        setHeading(head)
        if (head != "All") {
            const updateItems = MenuCard.filter((curElem) => {
                return curElem.category === head;
            })
            setItems(updateItems);
        }
        else {
           
            setItems(MenuCard);
        }
    }




    return (
        <>

            <section id="menu" className="bg-light">
                <div className="container" data-aos="fade-up">

                <Header six="Our Menu" one="Check Our" two={<span className='text-danger'>Yummy Menu</span>}  />
                    <ul className="nav d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <li className="nav-item " onClick={() => { Heading("Starters") }}>
                            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                                <h5 className="fw-light">Starters</h5>
                                <hr size="7" color="white" />
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => { Heading("Breakfast") }}>
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                                <h5 className="fw-light">Breakfast</h5>
                                <hr size="7" color="white" />
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => { Heading("Lunch") }}>
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                                <h5 className="fw-light">Lunch</h5>
                                <hr size="7" color="white" />
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => { Heading("Dinner") }}>
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                                <h5 className="fw-light">Dinner</h5>
                                <hr size="7" color="white" />
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => { Heading("All") }}>
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                                <h5 className="fw-light">All</h5>
                                <hr size="7" color="white" />
                            </a>
                        </li>
                    </ul>
                    <div className="text-center">
                        <h5 className="monospace text-lighter">menu</h5>
                        <h1 id="change" className="text-danger">{heading}</h1>
                    </div>
                    <div className="row gallery">


                        {

                            items.map((elem) => {
                                const { id, image, price, description, category, name } = elem;
                                return (
                                    <div className="col-lg-4 p-5 menu-item">
                                        <a href="" >
                                            <img src={image} alt="" className="menu-img img-fluid" />
                                        </a>
                                        <div className="text-center pt-4">
                                            <h2 className="fw-bold">{name}</h2>
                                            <p>{description}</p>
                                            <h3 className="text-danger fw-bold">{price}</h3>
                                        </div>
                                    </div>
                                )
                            })

                        }


                    </div>
                    <div class="row  gallery ">

                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
