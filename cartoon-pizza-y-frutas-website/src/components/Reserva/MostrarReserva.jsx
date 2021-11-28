import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cargando from "../loading";
import "./mostrarReserva.css";


export default function MostrarReserva() {

  const [carga, setCarga] = useState(true)
  const [reserva, setReserva] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    fetch("https://backend-cartoon-pizza-frutas.azurewebsites.net/api/reserva")
      .then(res => res.json())
      .then(data => {
        setReserva(data)
        setCarga(false)})
 }, [])  
 
    if(reserva.length === 0) {
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
        <Cargando isOpen={carga} className="cargapizza"/>
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
                <a className="mt-2 p-2 btn btn-danger" href={`https://backend-cartoon-pizza-frutas.azurewebsites.net/api/reserva/${r.id}`}>Eliminar</a>
              </div>
            ))}
          </div>
        </>
      );
    }  
}
