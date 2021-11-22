import React from "react";

export default function OurStaff(props) {
  const { nombre, cargo, imagen } = props;

  return (
    <div className="personal">
      <img src={imagen} alt="" />
      <p className="nombre">{nombre}</p>
      <p className="cargo">{cargo}</p>
     </div>
  );
}
