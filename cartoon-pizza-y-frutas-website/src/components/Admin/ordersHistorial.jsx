import React from "react";
import Ordenes from "./ordersCards";
import "./ordersHistorial.css"


class HistorialPedidos extends React.Component {
    render() {
        {
            return (
                <>
                    <div className="titulo">
                        <h1 className="fs-1 fw-bold mt-4 text-center">Historial de pedidos</h1>
                        <h2 className="ms-5 mt-4 fs-3">Consulta los pedidos realizados en la pagina</h2>
                    </div>                    
                    <Ordenes />                    
                </>
            );
        }
    }
}

export default HistorialPedidos;