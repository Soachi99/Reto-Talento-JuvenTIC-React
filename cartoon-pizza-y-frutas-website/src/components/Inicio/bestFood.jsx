import React from "react";
import Card from "./foodCard";
import { Button } from "react-bootstrap";
import "./bestFood.css";


class recomendaciones extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center mt-4"> RECOMENDADOS DEL CHEF </h1>
                <div className="contenedor_recomendaciones mt-5">
                    <Card id="cards" titulo="Pizza Cartoon" imagen={process.env.PUBLIC_URL + "/images/pizzacartoon.jpg"} />
                    <Card id="cards" titulo="Pizza Batman" imagen={process.env.PUBLIC_URL + "/images/pizzabatman.jpg"} />
                    <Card id="cards" titulo="Pizza Teen Titans" imagen={process.env.PUBLIC_URL + "/images/pizzateentitans.jpeg"} />
                </div>                
                <Button className="d-block mx-auto mt-5 fw-bold fs-5" variant="outline-dark" id="btn_mas"> Más productos</Button>
            </div>

            
        );
    }
}

export default recomendaciones;