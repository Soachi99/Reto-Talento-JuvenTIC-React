import React, { useState, useEffect } from "react";
import OurHistory from "./OurHistory";
import OurStaff from "./OurStaff";
import Comentarios from "../Inicio/commentaries";
import "./nosotros.css";
//import personal from "./staff.json";

export default function AboutUs() {
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    fetch("https://talento-juventic-backend.herokuapp.com/api/personal")
      .then((res) => res.json())
      .then((data) => setPersonal(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="contenedor-nosotros-main">
        <OurHistory />
        <div className="contenedor-personal" id="personal">
          <h1>nuestro personal</h1>
          <div className="contenedor-personal-grid">
            {personal.map((p) => (
              <OurStaff
                key={p.id}
                nombre={p.nombre}
                cargo={p.cargo}
                imagen={p.imagen_url}
              />
            ))}
          </div>
        </div>
      </div>
      <Comentarios />
    </>
  );
}
