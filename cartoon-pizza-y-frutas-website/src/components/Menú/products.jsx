import React from "react";
import Data from "../../js/productos.json";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./products.css";
import {menosProducto} from "../../js/buttons_menu.js";
import {masProducto} from "../../js/buttons_menu.js";
import {addCarrito} from "../../js/buttons_menu.js";

class Productos extends React.Component {

    render() {
        return (
            <div className ="contenedor_productos mt-5 me-5 ms-5">

                {Data.map(product => {
                    return (
                        <Card className="card-productos mt-3" key={product.id}>
                            <Card.Img
                                variant="top"
                                className="imagen-productos img-fluid rounded mx-auto d-block"
                                src={process.env.PUBLIC_URL + product.imagen}
                                id={"imagen_" + product.id}
                                key={product.id}
                            />
                            <Card.Body className="ms-4">
                                <Card.Title
                                    className="fw-bold"
                                    id={"nombre_" + product.id}
                                >
                                    {product.nombre}
                                </Card.Title>
                                <Card.Text id={"des_" + product.id}>
                                    {product.descripcion}
                                </Card.Text>
                                <Card.Text
                                    className="fs-4"
                                    id={"precio_" + product.id}>
                                    {"Precio: $" + product.precio}
                                </Card.Text>

                                <div className="botones">
                                    <Button
                                        variant="dark"
                                        id={"minus_" + product.id}
                                        value={product.id}
                                        style={{ width: '50px', height: '50px' }}
                                        onClick = {() => {menosProducto(product.id)}}>
                                        -
                                    </Button>
                                    <p
                                        className="boton border border-dark text-center pt-3"
                                        id={"numero_productos_" + product.id}
                                        style={{ width: '50px', height: '50px' }}>
                                        0
                                    </p>
                                    <Button
                                        variant="dark"
                                        id={"plus_" + product.id}
                                        value={product.id}
                                        style={{ width: '50px', height: '50px' }}
                                        onClick = {() => {masProducto(product.id)}}>
                                        +
                                    </Button>
                                </div>

                                <div className="botones_detalles">
                                    <Button
                                        variant="dark"
                                        id={"add_" + product.id}
                                        value={product.id}
                                        onClick = {() => {addCarrito(product.id)}}>
                                        Agregar al carrito
                                    </Button>
                                    <Button
                                        className = "mt-2"
                                        variant="dark"
                                        id={"modal_" + product.id}>
                                        Mas detalles
                                    </Button>
                                </div>

                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default Productos;