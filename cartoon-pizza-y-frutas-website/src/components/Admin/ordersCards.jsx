import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Cargando from "../loading";


const Pedidos = () => {
    const baseUrl = "https://api-cartoon-pizza20211121114915.azurewebsites.net/api/pedidos";
    const [data, setData] = useState([]);
    const [carga, setCarga] = useState(true);

    var detalles = false;


    const ToggleDetalles = (id) => {
        let content = document.querySelector("#Productos" + id);

        if (!localStorage.getItem('iddetalles')) {
            localStorage.setItem('iddetalles', id);
            detalles = true;
        }
        else {
            if ((parseInt(localStorage.getItem('iddetalles')) !== id && detalles === true) || (parseInt(localStorage.getItem('iddetalles')) !== id && detalles === false) ) {
                localStorage.setItem('iddetalles', id);
                detalles = true;
            }
            else{                
                detalles = !detalles;
            }  
        }

        console.log(detalles);

        if (!detalles) {
            content.innerHTML = '';
        }
        else {
            content.innerHTML = '<h4 className="text-center"> Productos </h4>';
            // eslint-disable-next-line array-callback-return
            data.map(info => {
                if (info.id === id) {
                    var productos = JSON.parse(info.productos);
                    // eslint-disable-next-line array-callback-return
                    productos.map(prod => {
                        content.innerHTML += `
                        <Card.Text key={"Info" + ${info.id} + ${prod.producto}}>
                        ${prod.producto} <br>
                        Cantidad: ${prod.count} <br>
                        Precio Unitario: ${prod.precio} <br>
                        Subtotal: ${prod.precio * prod.count} <br>
                    </Card.Text>`
                    })
                }
            })
        }
    }

    const peticionGet = async () => {
        await axios.get(baseUrl).then(response => {
            setData(response.data);
            setCarga(false);
        }).catch(error => console.error(error));
    }

    useEffect(() => { peticionGet(); }, [])


    return (
        <>
            <Cargando isOpen={carga} className="cargapizza"/>
            <div className="historial-container mb-5">
            {data.map(info => {
                //var productos = JSON.parse(info.productos);
                return (                    
                    <Card style={{ width: '22rem' }} className="card-pedidos mt-4 mx-auto border-dark mb-3 shadow" key={"pedido" + info.id}>
                        
                        <Card.Body>
                            <Card.Title>Pedido {info.fecha} </Card.Title>
                            <Card.Text key={"Texto1" + info.id}>
                                Fecha : {info.fecha} <br></br>
                                Nombre cliente: {info.nombre} <br></br>
                                Correo Electronico: {info.email} <br></br>
                                Numero de Productos: {info.numerop} <br></br>
                                Total Compra (Más servicio): $ {info.total} <br></br> <br></br>
                                Comentarios: {info.comentarios} <br></br>
                            </Card.Text>
                            <div id={"Productos" + info.id}>
                               
                            </div>
                            <Button className="d-block mx-auto mt-3" variant="outline-dark" key={"Detalles" + info.id} onClick={() => ToggleDetalles(info.id)}>Detalles</Button>

                        </Card.Body>
                    </Card>
                )
            }
            )}
            </div>
        </>
    );

}



class Ordenes extends React.Component {
    render() {
        return (
            <>
                <Pedidos />
            </>
        );
    }
}

export default Ordenes;

