import React from "react";
import { Carousel } from "react-bootstrap";
import './principalCarousel.css';


class carousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + "/images/background_one.png"}
                            alt="First slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={process.env.PUBLIC_URL + "/images/Logo.png"} className="img-fluid w-25" id="logo_principal" alt="Logo Slide One" />
                            <h1 id="first_capt"> <b>CARTON <br /> PIZZA FRUTAS</b> </h1>
                            <p id="text_first_capt"> El mas rico sabor de pizzas, acompañado de los mejores cartoons. No te pierdas de
                                esta increible
                                experiencia</p>
                            <button type="button" onClick={event =>  window.location.href='/menu'} id="first_btn"> <b>Ver menú</b></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + "/images/background_two.jpg"}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={process.env.PUBLIC_URL + "/images/pizza.png"} className="img-fluid w-25" id="pizza_carousel" alt="Logo Slide Two" />
                            <h1 id="second_capt"> <b> Las pizzas mas deliciosas de toda la ciudad </b> </h1>
                            <p id="text_second_capt"> Ven a probar de las mas deliciosas pizzas, buen servicio, buena comida y un gran
                                ambiente</p>
                            <button type="button" onClick={event =>  window.location.href='/menu'} id="second_btn"> <b>Ver menú</b></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + "/images/background_three.jpg"}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={process.env.PUBLIC_URL + "/images/pizza_2.png"} className="img-fluid w-25" id="pizza_carousel_two" alt="Logo SLide Three" />
                            <h1 id="third_capt"> <b> Reserva con nosotros </b> </h1>
                            <p id="text_third_capt"> No te pierdas de esta gran y deliciosa experiencia junto a tu familia o amigos.Te
                                esperamos</p>
                            <button type="button" onClick={event =>  window.location.href='/reserva'} id="third_btn"> <b>Reserva</b></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default carousel;