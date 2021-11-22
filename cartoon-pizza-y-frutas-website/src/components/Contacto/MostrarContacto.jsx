import React, { useState, useEffect } from "react";
import "./mostrar-info-contacto.css";

const admin = JSON.parse(localStorage.getItem("admin_view"));

export default function MostrarContacto() {

  const [comentarios, setComentarios] = useState([]);
    

 useEffect(() => {
    fetch("http://localhost:3001/api/comentarios")
      .then(res => res.json())
      .then(data => setComentarios(data))
 }, [])  
    
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
    if (comentarios.length === 0) {
      return (
        <div>
          <div className="m-bottom">
            <h1 className="titulo-preguntas">
              Comentarios realizados
            </h1>
            <h2 className="mt-4">No hay informacion por el momento</h2>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h1 className="titulo-preguntas">Comentarios realizados</h1>
          <div className="contenedor-preguntas">
            {comentarios.map((comentario) => (
              <div className="info-pregunta" key={comentario.id}>
                <p>
                  <span>Asunto: </span>
                  {comentario.asunto}
                </p>
                <p>
                  <span>Nombre: </span>
                  {comentario.nombre_completo}
                </p>
                <p>
                  <span>Correo: </span>
                  {comentario.correo}
                </p>
                <p>
                  <span>Comentario:   </span>
                  {comentario.mensaje}
                </p>
                <a className="mt-2 p-2 btn btn-danger" href={`http://localhost:3001/api/comentarios/${comentario.id}`}>Eliminar</a>
              </div>
            ))}
          </div>
        </>
      );
    }
  }
}
