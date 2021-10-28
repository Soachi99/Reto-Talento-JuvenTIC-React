import React, { useState } from "react";
import "./reserva.css";
import { Limpiar } from "../../js/reserva";

const Reserva = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [telefono, settelefono] = useState("");
  const [numPersonas, setnumPersonas] = useState("");
  const [servicio, setservicio] = useState("");
  const [fecha, setfecha] = useState("");
  const [hora, sethora] = useState("");
  const [indicacionesEspeciales, setindicacionesEspeciales] = useState("");

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

  const enviarDatos = (e) => {
    e.preventDefault();
    const datos = {
      name,
      email,
      telefono,
      numPersonas,
      servicio,
      fecha,
      hora,
      indicacionesEspeciales,
    };
    console.log(datos);
  };

  return (
    <div className="contenedor-form-reserva">
      <form
        className="formulario"
        id="form"
        action="/envio-reserva"
        method="POST"
        onSubmit={enviarDatos}
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
          name="email"
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
          name="numPersonas"
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
          name="mensaje"
          onChange={getIndicacionesEspeciales}
          className="indicacionesMensaje"
          cols="30"
          rows="4"
          placeholder="Si quieres alguna indicacion especial(peticion extra) escibela aquí"
        ></textarea>

        <button type="submit" className="btn-añadir">
          Enviar reserva
        </button>
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
  );
};

export default Reserva;
