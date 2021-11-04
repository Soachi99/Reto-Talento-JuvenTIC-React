import React from "react";
import Ordenes from "./ordersCards";
import "./ordersHistorial.css"

class HistorialPedidos extends React.Component {
    render() {
        if (localStorage.getItem('admin_view') == null || localStorage.getItem('admin_view') === false) {
            return (
                <div className="bienvenido-principal">
                    <div className="bienvenido carousel-caption">
                        <h1 className="mt-5"> <b> No tienes permisos para entrar a esta pagina o no te has logeado </b> </h1>
                        <img src={process.env.PUBLIC_URL + "/images/Logo.png"} className="logo-admin img-fluid d-block mx-auto mt-5" alt="Logo admin" />
                    </div>

                </div>
            );
        }
        else {

            if (localStorage.getItem('pedidos') === null) {
                return (
                    <div className="titulo">
                        <h1 className="fs-1 fw-bold ms-5 mt-4">Historial de pedidos</h1>
                        <h2 className="texto-sin-productos ms-5 mt-4 fs-3">No hay pedidos que mostrar por el momento</h2>
                    </div>
                );
            }
            else {
                return (
                    <>
                        <div className="titulo">
                            <h1 className="fs-1 fw-bold ms-5 mt-4">Historial de pedidos</h1>
                            <h2 className="ms-5 mt-4 fs-3">Consulta los pedidos realizados en la pagina</h2>
                        </div>
                        <div className="historial-container mb-5">
                            <Ordenes />
                        </div>
                    </>
                );
            }

        }
    }
}

export default HistorialPedidos;