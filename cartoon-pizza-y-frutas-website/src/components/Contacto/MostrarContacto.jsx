import React from "react";
import "./mostrar-info-contacto.css";

let datosPreguntas = JSON.parse(localStorage.getItem("preguntas"));

export default function MostrarContacto() {
  if (!datosPreguntas) {
    return (
      <div>
        <h1 className="titulo-preguntas">No hay ninguna peticion o pregunta</h1>
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
