import React, { useState } from "react";
import axios from "axios";
import "./contacto.css";
import Swal from "sweetalert2";

export default function Contacto() {
  const [asunto, setasunto] = useState("");
  const [nombre, setnombre] = useState("");
  const [email, setemail] = useState("");
  const [mensaje, setmensaje] = useState("");

  const getAsunto = (e) => {
    setasunto(e.target.value);
  };
  const getNombre = (e) => {
    setnombre(e.target.value);
  };
  const getEmail = (e) => {
    setemail(e.target.value);
  };
  const getMensaje = (e) => {
    setmensaje(e.target.value);
  };

  const enviar = async (e) => {
    const datos = {
      asunto,
      nombre,
      email,
      mensaje,
    };

    // localStorage
    if (JSON.parse(localStorage.getItem("preguntas")) === null) {
      let guardarPreguntas = [];
      guardarPreguntas.push(datos);
      localStorage.setItem("preguntas", JSON.stringify(guardarPreguntas));
    } else {
      let actualizarPreguntas = JSON.parse(localStorage.getItem("preguntas"));
      actualizarPreguntas.push(datos);
      localStorage.setItem("preguntas", JSON.stringify(actualizarPreguntas));
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se ha enviado correctamente 😀",
      showConfirmButton: true,
      timer: false,
    });

    const url = await axios.post(
      "https://reto-talento-juventic.herokuapp.com/enviar-contacto",
      {
        datos,
      }
    );
    const data = await url.data;
    return data;
  };

  return (
    <div className="contenedor">
      <div className="contenedor-general-contacto">
        <div className="contenedor-formulario">
          <h1>contáctenos</h1>
          <form
            action="https://reto-talento-juventic.herokuapp.com/enviar-contacto"
            method="POST"
            className="formulario"
            onSubmit={enviar}
          >
            <input
              type="text"
              className="asunto"
              name="asunto"
              placeholder="Asunto *"
              onChange={getAsunto}
              required
            />
            <input
              type="text"
              className="nombre"
              name="nombre"
              placeholder="Nombre Completo *"
              pattern="[a-zA-Z'-'\s]*"
              minLength="8"
              maxLength="60"
              onChange={getNombre}
              required
            />
            <input
              type="email"
              className="correo"
              name="email"
              placeholder="Correo Completo *"
              onChange={getEmail}
              required
            />
            <textarea
              placeholder="Mensaje *(debes escirbir un mensaje de menos de 100 carácteres y mas de 15 carácteres)"
              minLength="15"
              name="mensaje"
              maxLength="100"
              onChange={getMensaje}
              required
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" id="check" required />
              <label htmlFor="check">Acepto Terminos y Condiciones *</label>
            </div>
            <input type="submit" className="btn-enviar" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  );
}
