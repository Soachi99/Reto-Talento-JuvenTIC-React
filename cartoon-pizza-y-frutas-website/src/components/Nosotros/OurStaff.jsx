import React from "react";

export default function OurStaff(props) {
  const { personal, cargo, imagen } = props;

  return (
    <div className="personal">
      <img src={imagen} alt="" />
      <p className="nombre">{personal}</p>
      <p className="cargo">{cargo}</p>
    </div>
  );
}
