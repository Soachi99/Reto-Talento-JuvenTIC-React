import React from "react";
import { Button } from "react-bootstrap";
import CardServicios from "./eventsCards";
import "./eventsContainer.css"

class Servicios extends React.Component {
    render() {
        return (
            <>
                <h1>Nuestros Servicios</h1>

                <div className="servicios-container">
                    <CardServicios
                        titulo="Fiestas Temáticas"
                        texto=" Ven y celebra con nosotros una fiesta magnifica según la
                    tematica de tu preferencia, elige tus preferencias y deleitate con nuestras mejores pizzas"
                        imagen={process.env.PUBLIC_URL + "images/celebracion-fiesta-infantil.jpg"}
                    />
                    <CardServicios
                        titulo="Cumpleaños"
                        texto=" Ven y celebra con nosotros tu fiesta de cumpleaños,
                    sorpresas y regalos para ti, elige tus preferencias y deleitate con nuestras mejores pizzas"
                        imagen={process.env.PUBLIC_URL + "images/celebracion-cumple.jpg"}
                    />
                    <CardServicios
                        titulo="Cartoon Party"
                        texto=" Ven y celebra con nosotros una happy hour, llamada Cartoon
                    Party, en la cual recibiras muchos descuentos en todos tus pedidos, Ven y disfruta."
                        imagen={process.env.PUBLIC_URL + "images/pizzacartoon.jpg"}
                    />
                    <CardServicios
                        titulo="Despedidas"
                        texto=" Ven y celebra con nosotros una fiesta magnifica según la
                    tematica de tu preferencia, elige tus preferencias y deleitate con nuestras mejores pizzas"
                        imagen={process.env.PUBLIC_URL + "images/celebracion-despedida.jpg"}
                    />
                    <CardServicios
                        titulo="Cena con amigos"
                        texto=" Ven y celebra con nosotros tu fiesta de cumpleaños,
                    sorpresas y regalos para ti, elige tus preferencias y deleitate con nuestras mejores pizzas"
                        imagen={process.env.PUBLIC_URL + "images/cena-con-amigos.jpg"}
                    />
                    <CardServicios
                        titulo="Declaraciones o propuestas"
                        texto=" Ven y celebra con nosotros una happy hour, llamada Cartoon
                    Party, en la cual recibiras muchos descuentos en todos tus pedidos, Ven y disfruta."
                        imagen={process.env.PUBLIC_URL + "images/celebracion-aniversario.jpg"}
                    />

                </div>

                <Button 
                className="d-block mx-auto mt-5 fw-bold fs-5 mb-5"  
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/reserva';
                    }}
                variant="outline-dark"> Has tu Reserva </Button>

            </>
        );
    }
}

export default Servicios;