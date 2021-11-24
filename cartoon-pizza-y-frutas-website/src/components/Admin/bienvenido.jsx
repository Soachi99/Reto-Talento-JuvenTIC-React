import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./bienvenido.css"

function Bienvenido () {
    const { isAuthenticated } = useAuth0();

    if(!isAuthenticated) {
        return (
            <div className = "bienvenido-principal">                
                <div className="bienvenido carousel-caption">
                    <h1 className = "mt-5"> <b> No tienes permisos para entrar a esta pagina o no te has logeado </b> </h1>
                    <img src={process.env.PUBLIC_URL + "/images/Logo.png"} className="logo-admin img-fluid d-block mx-auto mt-5"  alt="Logo admin" />
                </div>
        
            </div>
        );        
    } else {
        return (
            <div className = "bienvenido-principal">                
                <div className="bienvenido carousel-caption">
                    <h1 className = "mt-5"> <b> Bienvenido admistrador </b> </h1>
                    <img src={process.env.PUBLIC_URL + "/images/Logo.png"} className="logo-admin img-fluid d-block mx-auto mt-5"  alt="Logo admin" />
                </div>
        
            </div>
        );
    }
}

export default Bienvenido;
