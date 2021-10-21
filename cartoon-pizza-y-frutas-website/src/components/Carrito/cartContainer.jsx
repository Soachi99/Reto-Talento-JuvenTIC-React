import React from "react";
import Detalles from "./details";
import ProductosCarrito from "./productsCart";
import "./cartContainer.css"

class Carrito extends React.Component {
    render() {
        return (
            <div>
                <div className="titulo">
                    <h1 className="fs-1 fw-bold ms-5 mt-4">Carrito de Compras</h1>
                    <h2 className="ms-5 mt-4 fs-3">Tus productos</h2>
                </div>
                <div className="contenedor-principal">
                    <ProductosCarrito />
                    <Detalles />
                </div>

            </div>
        );
    }
}

export default Carrito;