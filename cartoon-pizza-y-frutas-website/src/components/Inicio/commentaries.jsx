import React from "react";
import { Carousel } from "react-bootstrap";
import "./commentaries.css"


class Comentarios extends React.Component {
    render() {
        return (
            <div className="testimonios">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + "/images/banner_testimonios.png"}
                            alt="First slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={process.env.PUBLIC_URL + "/images/cliente1.png"} className="cliente img-fluid" alt="Cliente 1" style={{ width: '15vw' }} />
                            <p className="text_testimonio"> "Ha sido una de las experiencias más deliciosas en mi vida, las pizzas son fantasticas y
                                la atención al cliente es fenomenal"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + "/images/banner_testimonios.png"}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={process.env.PUBLIC_URL + "/images/cliente2.png"} className="cliente img-fluid" alt="Cliente 1" style={{ width: '15vw' }} />
                            <p className="text_testimonio"> "Que rico es comer en un lugar donde la atención es excelente y donde cada
                                uno de los productos son de alta calidad"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + "/images/banner_testimonios.png"}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={process.env.PUBLIC_URL + "/images/cliente3.png"} className="cliente img-fluid" alt="Cliente 1" style={{ width: '15vw' }}/>
                            <p className="text_testimonio"> "La comida es excelente, la presentación muy agradable y el cartoon party es
                                una cosa loca, 100% recomendado"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Comentarios;