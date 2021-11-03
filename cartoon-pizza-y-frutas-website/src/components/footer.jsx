import React from "react";
import "./footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="contenido-footer">

                    <img src={process.env.PUBLIC_URL + "images/logo_banner.png"} className="logo_footer" alt="Logo footer"/>

                    <div className ="mapa-sitio">
                    <a className ="titulo-mapa text-decoration-none fw-bold" href="/mapa-del-sitio"> <h2>Mapa del sitio</h2> </a>
                    <div className ="lista-mapa-sitio">
                    <a href="/">inicio</a>
                    <a href="/nosotros">nosotros</a>
                    <a href="/menu">menú</a>
                    <a href="/servicio">servicios</a>
                    <a href="/contacto">contactenos</a>
                    </div>
                    </div>

                    <div className ="servicios-footer">
                    <h2>servicios especiales</h2>
                    <div className ="lista-servicios">
                    <li>fiestas tematicas</li>
                    <li>cumpleaños</li>
                    <li>cartoon party</li>
                    </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;