import React, { useState, useEffect } from "react";
import "./mostrarReserva.css";
import axios from "axios";



const admin = JSON.parse(localStorage.getItem("admin_view"));


export default function MostrarReserva() {

  const [reserva, setReserva] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:3001/reserva")
       .then(res => setReserva(res.data))       
  }, []);

  console.log(reserva.length)

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
    if(reserva.length === 0 || reserva.length === 15) {
      return(
        <div>
          <div className="m-bottom">
            <h1>Reservas realizadas</h1>
            <h2 className="mt-4">No hay reservas por el momento</h2>
          </div>
        </div>
      );
    } else {
      return(
        <>
        <h1>Reservas Realizadas</h1>
          <div className="contenedor-reserva">
            {reserva.map(r => (
              <div className="reserva" key={r.id}>
                <p><span>Nombre: </span>{r.nombre}</p>
                <p><span>Correo: </span>{r.correo}</p>
                <p><span>Telefono: </span>{r.telefono}</p>
                <p><span>Numero de personas: </span>{r.numero_personas}</p>
                <p><span>Servicio: </span>{r.servicio}</p>
                <p><span>Fecha: </span>{r.fecha}</p>
                <p><span>Hora: </span>{r.hora}</p>
                <p><span>Indicacion especial: </span>{r.indicacion_especial}</p>
                <a className="mt-2 p-2 btn btn-danger" href={`http://localhost:3001/reserva/${r.id}`}>Eliminar</a>
              </div>
            ))}
          </div>
        </>
      );
    }
  }  
}
