import React from "react";
import { Card } from "react-bootstrap";



class Ordenes extends React.Component {
    render() {
        let data = JSON.parse(localStorage.getItem('pedidos'));
        return (
            <>
                {data.map(info => {
                    return (
                        <Card style={{ width: '22rem'}} className="mt-4 me-5 ms-5 border-dark mb-3 shadow d-block mx-auto" key={info.dia}>
                            <Card.Body>
                                <Card.Title>Pedido {info.dia} </Card.Title>
                                <Card.Text>
                                    Nombre cliente: {info.nombre} <br></br>
                                    Correo Electronico: {info.email} <br></br>
                                    Numero de Productos: {info.numP} <br></br>
                                    Total Compra (Más servicio): $ {info.final_total} <br></br> <br></br>
                                    Productos:
                                    {info.datos.map(prod => {
                                        return (
                                            <Card.Text>
                                                {prod.producto} <br></br>
                                                Cantidad: {prod.count} <br></br>
                                                Precio Unitario: {prod.precio} <br></br>
                                                Subtotal: {prod.precio * prod.count}
                                            </Card.Text>
                                        )
                                    })}
                                    Comentarios: {info.comentarios} <br></br>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
                )}
            </>
        );
    }
}

export default Ordenes;

