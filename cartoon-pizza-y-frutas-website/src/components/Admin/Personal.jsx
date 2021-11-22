import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import './personal.css'

const admin = JSON.parse(localStorage.getItem("admin_view"));

export default function Personal() {

    const [getPersonal, SetgetPersonal] = useState([]);
    const [data, setData] = useState([]);
    const [ModalAgregar, SetModalAgregar] = useState(false);
    const [nuevoDato, setnuevoDato] = useState({
        nombre: "",
        cargo: "",
        imagen_url: ""
    });

    const handleChange = (e) => {
        setnuevoDato(
            {...nuevoDato, [e.target.name] : e.target.value}
        );
    }

    useEffect(() => {
        fetch("http://localhost:3001/api/personal")
            .then(res => res.json())
            .then(data => SetgetPersonal(data))
            .catch(error => console.log(error))
    }, []);

    const peticionPost = async () => {
        ToogleModalAgregar();
        Swal.fire({
            icon: 'success',
            title: 'Completado',
            text: 'El servicio se ha agregado correctamente a la base de datos',
            confirmButtonColor: '#3085d6'
        })     
        const enviar = await axios.post("http://localhost:3001/api/personal", nuevoDato)
        const datos = enviar.data;
        return datos;
    }

    const ToogleModalAgregar = () =>{
        SetModalAgregar(!ModalAgregar);
    }
       
    if(!admin) {
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
        if(getPersonal.length < 1) {
            return(
                <>
                    <h1>Nuestro personal: {getPersonal.length} por ahora</h1>
                    <Button className="d-block mx-auto mt-5" variant="dark" onClick={() => ToogleModalAgregar()}>Agregar Nuevo Empleado</Button>
                    <Modal isOpen={ModalAgregar}>
                        <ModalHeader>Agregar nuevo empleado</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={peticionPost}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange} required/>
                                    <br />
                                    <Form.Label>Cargo:</Form.Label>
                                    <Form.Control type="text" rows={3}  placeholder="cargo" name="cargo" onChange={handleChange} required/>
                                    <Form.Label>URL de la imagen:</Form.Label>
                                    <Form.Control type="url" rows={3}  placeholder="url de la imagen" name="imagen_url" onChange={handleChange} required/>                            
                                </Form.Group>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" variant="primary" onClick={() => peticionPost()} >Agregar</Button>
                            <Button className="ms-3" onClick={() => ToogleModalAgregar()} variant="danger">Cancelar</Button>
                        </ModalFooter>
                    </Modal>                    
                </>
            );            
        } else {
            return(
                <>
                    <h1>Nuestro personal: {getPersonal.length}</h1><br />
                    <Button className="d-block mx-auto mt-5" variant="dark" onClick={() => ToogleModalAgregar()}>Agregar Nuevo Empleado</Button>
                    <div className="contenedor-personal-grid">
                        {
                            getPersonal.map(p => (
                                <div className="personal personal-admin" key={p.id}>
                                    <img src={p.imagen_url} alt="" />
                                    <p className="nombre nombre-admin">{p.nombre}</p>
                                    <p className="cargo cargo-admin">{p.cargo}</p>
                                    <a className="mt-2 p-2 btn btn-danger" href={`http://localhost:3001/api/personal/${p.id}`}>Eliminar</a>
                                </div>                                
                            ))
                        }
                    </div>

                    <Modal isOpen={ModalAgregar}>
                        <ModalHeader>Agregar nuevo empleado</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={peticionPost}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange} required/>
                                    <br />
                                    <Form.Label>Cargo</Form.Label>
                                    <Form.Control input="text" rows={3}  placeholder="cargo" name="cargo" onChange={handleChange} required/>
                                    <Form.Label>URL de la imagen</Form.Label>
                                    <Form.Control input="url" rows={3}  placeholder="cargo" name="imagen_url" onChange={handleChange} required/>                            
                                </Form.Group>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" variant="primary" onClick={() => peticionPost()} >Agregar</Button>
                            <Button className="ms-3" onClick={() => ToogleModalAgregar()} variant="danger">Cancelar</Button>
                        </ModalFooter>
                    </Modal>                    
                </>
            );
        }
    }
}