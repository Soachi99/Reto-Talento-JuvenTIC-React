import React from "react";
import "./mostrar-info-contacto.css";

let datosPreguntas = JSON.parse(localStorage.getItem("preguntas"));
const admin = JSON.parse(localStorage.getItem("admin_view"));

export default function MostrarContacto() {
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
    if (!datosPreguntas) {
      return (
        <div>
          <div className="m-bottom">
            <h1 className="titulo-preguntas">
              Peticion o preguntas realizadas
            </h1>
            <h2 class="mt-4">No hay informacion por el momento</h2>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h1 className="titulo-preguntas">Peticion o preguntas realizadas</h1>
          <div className="contenedor-preguntas">
            {datosPreguntas.map((pregunta) => (
              <div className="info-pregunta">
                <p>
                  <span>Asunto: </span>
                  {pregunta.asunto}
                </p>
                <p>
                  <span>Nombre: </span>
                  {pregunta.nombre}
                </p>
                <p>
                  <span>Correo: </span>
                  {pregunta.email}
                </p>
                <p>
                  <span>Mensaje:</span>
                  {pregunta.mensaje}
                </p>
              </div>
            ))}
          </div>
        </>
      );
    }
  }
}
