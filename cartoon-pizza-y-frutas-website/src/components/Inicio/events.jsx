import React from "react";
import Card from "./eventCards";
import "./events.css"

class Eventos extends React.Component {
    render() {
        return (
            <div className="contenedor-eventos mt-5">
                <Card
                    titulo="Fiestas Temáticas"
                    texto=" Ven y celebra con nosotros una fiesta magnifica según la
                    tematica de tu preferencia, elige tus preferencias y deleitate con nuestras mejores pizzas"
                    imagen={process.env.PUBLIC_URL + "images/mask.png"}
                />
                <Card
                    titulo="Cumpleaños"
                    texto=" Ven y celebra con nosotros tu fiesta de cumpleaños,
                    sorpresas y regalos para ti, elige tus preferencias y deleitate con nuestras mejores pizzas"
                    imagen={process.env.PUBLIC_URL + "images/happybirthday.png"}
                />
                <Card
                    titulo="Cartoon Party"
                    texto=" Ven y celebra con nosotros una happy hour, llamada Cartoon
                    Party, en la cual recibiras muchos descuentos en todos tus pedidos, Ven y disfruta."
                    imagen={process.env.PUBLIC_URL + "images/batman.png"}
                />

            </div>
        );
    }
}

export default Eventos;