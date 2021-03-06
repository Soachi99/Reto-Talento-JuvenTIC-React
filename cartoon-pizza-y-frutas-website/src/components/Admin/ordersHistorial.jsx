import React from "react";
import Ordenes from "./ordersCards";
import { useAuth0 } from "@auth0/auth0-react";
import "./ordersHistorial.css"


function HistorialPedidos() {
    
    const { isAuthenticated } = useAuth0();

    if(isAuthenticated){
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
    else{
        return (
            <div className = "bienvenido-principal">                
                <div className="bienvenido carousel-caption">
                    <h1 className = "mt-5"> <b> No tienes permisos para entrar a esta pagina o no te has logeado </b> </h1>
                    <img src={process.env.PUBLIC_URL + "/images/Logo.png"} className="logo-admin img-fluid d-block mx-auto mt-5"  alt="Logo admin" />
                </div>
        
            </div>
        );   
    }    
}


export default HistorialPedidos;