import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./productsCart.css"

class ProductosCarrito extends React.Component {  
    render() {
        let data = JSON.parse(localStorage.getItem('productos'));        
        return (
            <div className="contenedor_productos_cart mt-4 me-5 ms-5">
                {data.map(product => {
                    return(
                        <Card className="card-productos_cart mt-3" key={product.ID}>
                            <Card.Img
                                variant="top"
                                className="imagen-productos_cart img-fluid rounded mx-auto d-block"
                                src={process.env.PUBLIC_URL + product.imagen}
                                id={"imagen_" + product.ID}
                                key={product.ID}
                            />
                            <Card.Body className="ms-4">
                                <Card.Title
                                    className="fw-bold"
                                    id={"nombre_" + product.ID}
                                >
                                    {product.nombre} 
                                </Card.Title>
                                <Card.Text id={"des_" + product.ID}>
                                    {product.descripcion}
                                </Card.Text>
                                <Card.Text
                                    className="fs-4"
                                    id={"precio_" + product.ID}>
                                    {" Precio: $" + product.precio} <br></br>
                                    {" Precio Total: $" + product.precio*product.count}
                                </Card.Text>

                                <div className="botones_cart">
                                    <Button
                                        variant="dark"
                                        id={"minus_" + product.ID}
                                        value={product.ID}
                                        style={{ width: '50px', height: '50px' }}
                                        >
                                        -
                                    </Button>
                                    <p
                                        className="boton border border-dark text-center pt-3"
                                        id={"numero_productos_" +product.ID}
                                        style={{ width: '50px', height: '50px' }}>
                                        {product.count}
                                    </p>
                                    <Button
                                        variant="dark"
                                        id={"plus_" + product.ID}
                                        value={product.ID}
                                        style={{ width: '50px', height: '50px' }}
                                        >
                                        +
                                    </Button>
                                </div>

                                <div className="botones_detalles_cart">
                                    <Button
                                        variant="dark"
                                        id={"add_" + product.ID}
                                        value={product.ID}
                                        >
                                        Eliminar del carrito
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

export default ProductosCarrito;