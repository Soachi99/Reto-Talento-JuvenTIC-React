import React from "react";
import OurHistory from "./OurHistory";
import OurStaff from "./OurStaff";
import Comentarios from "../Inicio/commentaries";
import "./nosotros.css";
import personal from "./staff.json";

export default function AboutUs() {
  return (
    <>
      <div className="contenedor-nosotros-main">
        <OurHistory />
        <div className="contenedor-personal" id="personal">
          <h1>nuestro personal</h1>
          <div className="contenedor-personal-grid">
            {personal.map((persona) => (
              <OurStaff
                personal={persona.personal}
                cargo={persona.cargo}
                imagen={persona.imagen}
              />
            ))}
          </div>
        </div>
      </div>
      <Comentarios />
    </>
  );
}
