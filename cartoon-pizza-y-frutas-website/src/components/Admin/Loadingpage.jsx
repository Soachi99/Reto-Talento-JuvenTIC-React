import React from "react";

class LoadingPage extends React.Component {
    render() { 
        return  (<div>
            <div className = "Cargando">                
                <div className="bienvenido carousel-caption">
                    <h1 className = "mt-5 me-3 ms-3"> <b> Espera un momento administrador mientras te redirigimos correctamente </b> </h1>
                    <img src={process.env.PUBLIC_URL + "/images/Logo.png"} className="logo-admin img-fluid d-block mx-auto mt-5"  alt="Logo admin" />
                </div>
        
            </div>
        </div>);
    }
}
 
export default LoadingPage;