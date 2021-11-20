import React, { useState } from "react";
import "./reserva.css";
import axios from "axios";
import { Limpiar } from "../../js/reserva";

const Reserva = () => {
  const [nombre, setname] = useState("");
  const [correo, setemail] = useState("");
  const [telefono, settelefono] = useState("");
  const [numero_personas, setnumPersonas] = useState("");
  const [servicio, setservicio] = useState("");
  const [fecha, setfecha] = useState("");
  const [hora, sethora] = useState("");
  const [indicacion_especial, setindicacionesEspeciales] = useState("");

  const getName = (e) => {
    setname(e.target.value);
  };
  const getEmail = (e) => {
    setemail(e.target.value);
  };
  const getTelefono = (e) => {
    settelefono(e.target.value);
  };
  const getNumPersonas = (e) => {
    setnumPersonas(e.target.value);
  };
  const getServicio = (e) => {
    setservicio(e.target.value);
  };
  const getFecha = (e) => {
    setfecha(e.target.value);
  };
  const getHora = (e) => {
    sethora(e.target.value);
  };
  const getIndicacionesEspeciales = (e) => {
    setindicacionesEspeciales(e.target.value);
  };

  const enviarDatos = async () => {
    // envio del form al correo
    const datos = {
      nombre,
      correo,
      telefono,
      numero_personas,
      servicio,
      fecha,
      hora,
      indicacion_especial,
    };

    const result = await axios.post(
      "http://localhost:3001/reserva",
      {
        datos,
      }
    );
    const data = await result.data;
    return data;
  };

  return (
    <div className="contenedor">
      <div className="contenedor-form-reserva">
        <form
          className="formulario"
          id="form"
          action="http://localhost:3001/reserva"
          method="POST"
          onSubmit={enviarDatos}
          required
        >
          <h2 className="titulo">Haz tu reserva aquí</h2>

          <p className="nameError"></p>
          <input
            type="text"
            name="nombre"
            onChange={getName}
            id="name"
            placeholder="Ingresa tu nombre"
            required
          />

          <p className="emailError"></p>
          <input
            type="email"
            name="correo"
            id="email"
            onChange={getEmail}
            placeholder="Ingresa tu correo electronico"
            required
          />

          <input
            type="tel"
            name="telefono"
            id="telefono"
            onChange={getTelefono}
            placeholder="Ingresa tu numero de telefono"
            required
          />

          <label htmlFor="">Numero de personas para la reserva</label>
          <input
            type="number"
            name="numero_personas"
            placeholder="numero de personas"
            onChange={getNumPersonas}
            className="numeroPersonas"
            id="numeroPersonas"
            min="1"
            required
          />

          <select
            onChange={getServicio}
            value={servicio}
            name="servicio"
            className="servicios"
            id="servicio"
            required
          >
            <option disabled selected>
              -- Seleccione el servicio --
            </option>
            <option value="Celebracion de Cumpleaños" name="servicio">
              Celebracion de Cumpleaños
            </option>
            <option value="Aniversarios" name="servicio">
              Aniversarios
            </option>
            <option value="Fiestas Infantiles" name="servicio">
              Fiestas Infantiles
            </option>
            <option value="Declaraciones o Propuestas" name="servicio">
              Declaraciones o Propuestas
            </option>
            <option value="Despedidas" name="servicio">
              Despedidas
            </option>
            <option value="Cena con Amigos" name="servicio">
              Cena con Amigos
            </option>
          </select>

          <div className="fecha-hora">
            <div className="fecha:">
              <label htmlFor="">Fecha</label>
              <input
                type="date"
                name="fecha"
                onChange={getFecha}
                className="fecha"
                id="fecha"
                required
              />
            </div>
            <div className="hora:">
              <label htmlFor="">Hora</label>
              <input
                type="time"
                name="hora"
                onChange={getHora}
                className="hora"
                id="hora"
                required
              />
            </div>
          </div>

          <textarea
            id="indicionesEspeciales"
            name="indicacion_especial"
            onChange={getIndicacionesEspeciales}
            className="indicacionesMensaje"
            cols="30"
            rows="4"
            placeholder="Si quieres alguna indicacion especial(peticion extra) escibela aquí"
          ></textarea>

          <button className="btn-añadir">Enviar reserva</button>
          <button
            type="button"
            id="limpiar"
            className="btn-añadir"
            onClick={Limpiar}
          >
            Limpiar Formulario
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reserva;
