import React from "react";
import "./mostrarReserva.css";

const getDatos = JSON.parse(localStorage.getItem("lista"));
const admin = JSON.parse(localStorage.getItem("admin_view"));

export default function MostrarReserva() {
  if (!admin) {
    return (
      <div className="bienvenido-principal">
        <div className="bienvenido carousel-caption">
          <h1 className="mt-5">
            {" "}
            <b>
              {" "}
              No tienes permisos para entrar a esta pagina o no te has logeado{" "}
            </b>{" "}
          </h1>
          <img
            src={process.env.PUBLIC_URL + "/images/Logo.png"}
            className="logo-admin img-fluid d-block mx-auto mt-5"
            alt="Logo admin"
          />
        </div>
      </div>
    );
  } else {
    if (!getDatos) {
      return (
        <div>
          <div className="m-bottom">
            <h1>Reservas realizadas</h1>
            <p>No hay reservas por el momento</p>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h1>Reservas realizadas</h1>
          <div className="contenedor-reserva">
            {getDatos.map((dato) => (
              <div className="reserva">
                <p>
                  <span>Nombre:</span> {dato.name}
                </p>
                <p>
                  <span>Correo:</span> {dato.email}
                </p>
                <p>
                  <span>Telefono:</span> {dato.telefono}
                </p>
                <p>
                  <span>Numero de personas:</span> {dato.numPersonas}
                </p>
                <p>
                  <span>Servicio:</span> {dato.servicio}
                </p>
                <p>
                  <span>Fecha:</span> {dato.fecha}
                </p>
                <p>
                  <span>Hora:</span> {dato.hora}
                </p>
                <p>
                  <span>Indicaciones especiales:</span>{" "}
                  {dato.indicacionesEspeciales}
                </p>
              </div>
            ))}
          </div>
        </>
      );
    }
  }
}
