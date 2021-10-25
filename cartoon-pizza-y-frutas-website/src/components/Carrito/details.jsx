import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./details.css"
import { cargarTotales } from "../../js/details_cart";
import { Validarproductos } from "../../js/confirm_products";


class Detalles extends React.Component {

    componentDidMount() {
        cargarTotales();
    }

    render() {


        return (
            <div className="detalles text-white card mt-4 ms-3 me-3" >
                <Card className="card-detalles">
                    <Card.Body>
                        <Card.Title className="text-center fs-2 fw-bold"> Detalles de la compra </Card.Title>

                        <Card.Text className="text-center" id="total_final">Total productos: </Card.Text>
                        <Card.Text className="text-center" id="servicio">Servicio: </Card.Text>
                        <Card.Text className="text-center" id="gran_total">Total: </Card.Text>

                        <Button
                         className="mx-auto d-block" 
                         variant="outline-light" 
                         onClick = {() => Validarproductos()}
                         > 
                         Finalizar pedido
                         </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}


export default Detalles;