import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CardServicios from "./eventsCards";
import "./eventsContainer.css"


const ServiciosC = () => {
    const baseUrl = "http://localhost:9074/api/servicios";
    const [data, setData] = useState([]);

    const peticionGet = async () => {
        await axios.get(baseUrl).then(response => setData(response.data)).catch(error => console.error(error));
    }

    useEffect(() => { peticionGet(); }, [])

    return (
        <>
            <h1>Nuestros Servicios</h1>

            <div className="servicios-container">
                {data.map(servicio => {
                    return (
                        <>
                            <CardServicios
                                titulo={servicio.nombre}
                                texto={servicio.descripcion}
                            />
                        </>
                    )
                })
                }
            </div>

            <Button
                className="d-block mx-auto mt-5 fw-bold fs-5 mb-5"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/reserva';
                }}
                variant="outline-dark"> Has tu Reserva </Button>

        </>
    )
}

class Servicios extends React.Component {
    render() {
        return (
            <>
                <ServiciosC />
            </>
        );
    }
}

export default Servicios;