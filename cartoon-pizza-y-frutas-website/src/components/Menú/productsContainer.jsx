import React from "react";
import Productos from "./products";

class ContenedorProductos extends React.Component {
    render() {
        return (
            <div>
                <div className="titulo">
                    <h1 className="fs-1 fw-bold ms-5 mt-4">Nuestros productos</h1>
                    <h2 className="ms-5 mt-4 fs-4">Aqui puedes ver y agregar los productos que quieres comprar</h2>
                </div>

                <Productos />
            </div>
        );
    }
}

export default ContenedorProductos;