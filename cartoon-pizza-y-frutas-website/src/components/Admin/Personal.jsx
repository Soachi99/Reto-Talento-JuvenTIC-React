import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import "./personal.css";
import Cargando from "../loading";

export default function Personal() {
  const [carga, setCarga] = useState(true);
  const [getPersonal, SetgetPersonal] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [ModalAgregar, SetModalAgregar] = useState(false);
  const [ModalEditar, SetModalEditar] = useState(false);
  const [nuevoDato, setnuevoDato] = useState({
    id: "",
    nombre: "",
    cargo: "",
    imagen_url: "",
  });

  const handleChange = (e) => {
    setnuevoDato({ ...nuevoDato, [e.target.name]: e.target.value });
  };

  const SelectOpcion = (datos, caso) => {
    setnuevoDato(datos);
    if (caso === "Editar") {
      ToogleModalEditar();
    }
  };

  const peticionGET = () => {
    fetch("https://talento-juventic-backend.herokuapp.com/api/personal")
      .then((res) => res.json())
      .then((data) => {
        SetgetPersonal(data);
        setCarga(false);
      })
      .catch((error) => console.log(error));
  };

  const peticionPost = async () => {
    await axios
      .post(
        "https://talento-juventic-backend.herokuapp.com/api/personal",
        nuevoDato
      )
      .then((response) => {
        setnuevoDato(data.concat(response.data));
        ToogleModalAgregar();
      })
      .catch((error) => console.error(error));
  };

  const peticionPut = () => {
    fetch(
      `https://talento-juventic-backend.herokuapp.com/api/personal/edit/${nuevoDato.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setnuevoDato(data);
        ToogleModalEditar();
      });
  };

  const ToogleModalAgregar = () => {
    SetModalAgregar(!ModalAgregar);
  };

  const ToogleModalEditar = () => {
    SetModalEditar(!ModalEditar);
  };

  useEffect(() => {
    peticionGET();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const id = getPersonal.map((persona) => persona.id);

  if (getPersonal.length < 1) {
    return (
      <>
        <Cargando isOpen={carga} className="cargapizza" />
        <h1>Nuestro personal: {getPersonal.length} por ahora</h1>
        <Button
          className="d-block mx-auto mt-5 mb-5"
          variant="dark"
          onClick={() => ToogleModalAgregar()}
        >
          Agregar Nuevo Empleado
        </Button>
        <Modal isOpen={ModalAgregar}>
          <ModalHeader>Agregar nuevo empleado</ModalHeader>
          <ModalBody>
            <form
              action="https://talento-juventic-backend.herokuapp.com/api/personal"
              method="POST"
              onSubmit={peticionPost}
            >
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="nombre"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Cargo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cargo"
                  placeholder="cargo"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  URL de la imagen
                </label>
                <input
                  type="url"
                  className="form-control"
                  name="imagen_url"
                  placeholder="URL de la imagen"
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" variant="primary">
                Agregar
              </Button>
              <Button
                className="ms-3"
                onClick={() => ToogleModalAgregar()}
                variant="danger"
              >
                Cancelar
              </Button>
            </form>
          </ModalBody>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <h1>Nuestro personal: {getPersonal.length}</h1>
        <br />
        <Button
          className="d-block mx-auto mt-5"
          variant="dark"
          onClick={() => ToogleModalAgregar()}
        >
          Agregar Nuevo Empleado
        </Button>
        <div className="contenedor-personal-grid">
          {getPersonal.map((p) => (
            <div className="personal personal-admin" key={p.id}>
              <img src={p.imagen_url} alt="" />
              <p className="nombre nombre-admin">{p.nombre}</p>
              <p className="cargo cargo-admin">{p.cargo}</p>
              <button
                className="mt-2 p-2 btn btn-primary"
                id={p.id}
                onClick={() => SelectOpcion(p, "Editar")}
              >
                Editar
              </button>
              <a
                className="ms-5 mt-2 p-2 btn btn-danger"
                href={`https://talento-juventic-backend.herokuapp.com/api/personal/${p.id}`}
              >
                Eliminar
              </a>
            </div>
          ))}
        </div>
        <Modal isOpen={ModalAgregar}>
          <ModalHeader>Agregar nuevo empleado</ModalHeader>
          <ModalBody>
            <form
              action="https://talento-juventic-backend.herokuapp.com/api/personal"
              method="POST"
              onSubmit={peticionPost}
            >
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="nombre"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Cargo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cargo"
                  placeholder="cargo"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  URL de la imagen
                </label>
                <input
                  type="url"
                  className="form-control"
                  name="imagen_url"
                  placeholder="URL de la imagen"
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" variant="primary">
                Agregar
              </Button>
              <Button
                className="ms-3"
                onClick={() => ToogleModalAgregar()}
                variant="danger"
              >
                Cancelar
              </Button>
            </form>
            <ModalFooter></ModalFooter>
          </ModalBody>
        </Modal>

        <Modal isOpen={ModalEditar}>
          <ModalHeader>Editar datos del empleado</ModalHeader>
          <ModalBody>
            <form
              onSubmit={peticionPut}
              action={`https://talento-juventic-backend.herokuapp.com/api/personal/edit/${nuevoDato.id}`}
              method="POST"
            >
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  onChange={handleChange}
                  value={nuevoDato.nombre}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Cargo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cargo"
                  onChange={handleChange}
                  value={nuevoDato.cargo}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  URL de la imagen
                </label>
                <input
                  type="url"
                  className="form-control"
                  name="imagen_url"
                  onChange={handleChange}
                  value={nuevoDato.imagen_url}
                  required
                />
              </div>
              <Button type="submit" variant="primary">
                Editar
              </Button>
              <Button
                className="ms-3"
                onClick={() => ToogleModalEditar()}
                variant="danger"
              >
                Cancelar
              </Button>
            </form>
          </ModalBody>
        </Modal>

        <Cargando isOpen={carga} className="cargapizza" />
      </>
    );
  }
}
