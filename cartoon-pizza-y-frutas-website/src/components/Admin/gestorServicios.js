import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import Cargando from "../loading";


export default function GestorServicios() {

    const baseUrl = "https://api-cartoon-pizza20211121114915.azurewebsites.net/api/servicios";
    const [data, setData] = useState([]);
    const [carga, setCarga] = useState(true);
    const [ModalAgregar, SetModalAgregar] = useState(false);
    const [ModalEditar, SetModalEditar] = useState(false);
    const [ModalEliminar, SetModalEliminar] = useState(false);

    const [NewData, setNewData] = useState({
        id: '',
        nombre: '',
        descripcion: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setNewData(
            { ...NewData, [name]: value }
        );
    }

    const ToogleModalAgregar = () => {
        SetModalAgregar(!ModalAgregar);
    }

    const ToogleModalEditar = () => {
        SetModalEditar(!ModalEditar);
    }

    const ToogleModalEliminar = () => {
        SetModalEliminar(!ModalEliminar);
    }

    const SelectOpcion = (datos, caso) => {
        setNewData(datos);
        if (caso === "Editar") {
            ToogleModalEditar();
        }
        if (caso === "Eliminar") {
            ToogleModalEliminar();
        }
    }

    const peticionGet = async () => {
        await axios.get(baseUrl).then(response => {
            setData(response.data);
            setCarga(false);
        }).catch(error => console.error(error));
    }

    const peticionPost = async () => {
        delete NewData.id;
        await axios.post(baseUrl, NewData).then(response => {
            setData(data.concat(response.data));
            ToogleModalAgregar();
            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'El servicio se ha agregado correctamente a la base de datos',
                confirmButtonColor: '#3085d6'
            })
        }).catch(error => console.error(error));
    }

    const peticionPut = async () => {
        await axios.put(baseUrl + "/" + NewData.id, NewData).then(response => {
            var res = response.data;
            var dataAux = data;
            // eslint-disable-next-line array-callback-return
            dataAux.map(datos => {
                if (datos.id === NewData.id) {
                    datos.nombre = res.nombre;
                    datos.descripcion = res.descripcion;
                }
            });
            ToogleModalEditar();
            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'El servicio se ha editado correctamente',
                confirmButtonColor: '#3085d6'
            })
        })
    }

    const peticionDelete = async () => {
        await axios.delete(baseUrl + "/" + NewData.id).then(response => {
            setData(data.filter(datos => datos.id !== response.data));
            ToogleModalEliminar();
            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'El servicio se ha eliminado de la base de datos correctamente',
                confirmButtonColor: '#3085d6'
            })
        })
    }

    useEffect(() => { peticionGet(); }, []);

    return (
        <>
            <h1 className="text-center mt-4"> Gestiona los servicios del restaurante </h1>
            <Button className="d-block mx-auto mt-5" variant="dark" onClick={() => ToogleModalAgregar()}>Agregar Nuevo Servicio</Button>
            <Cargando isOpen={carga} />
            <div className="servicios-container">                
                {data.map(servicios => {
                    return (
                        <Card key={"servicios" + servicios.id} className="cards border-light mt-5 mb-5 " style={{ width: '22rem', height: '18rem', margin: ' 10px auto' }}>
                            <Card.Body className="body rounded-2" style={{ padding: '10px 10px', textAlign: 'center' }}>
                                <div className="front">
                                    <Card.Title className="text-center fs-3 mt-3 text-black fw-bold">{servicios.nombre}</Card.Title>
                                    <Card.Text className="text-center fs-5 text-black">
                                        {servicios.descripcion}
                                    </Card.Text>
                                </div>

                                <div className="back ">
                                    <Button
                                        className="boton-services d-block mx-auto"
                                        variant="light"
                                        id={"editar_" + servicios.id}
                                        key={"editar_" + servicios.id}
                                        onClick={() => SelectOpcion(servicios, "Editar")}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        className="d-block mx-auto mt-3"
                                        variant="danger"
                                        id={"eliminar_" + servicios.id}
                                        style={{ backgroundColor: "red" }}
                                        onClick={() => SelectOpcion(servicios, "Eliminar")}
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })

                }
            </div>

            <Modal isOpen={ModalAgregar}>
                <ModalHeader>Agregar un nuevo servicio/evento al restaurante</ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange} required />
                            <br />
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Descripción" name="descripcion" onChange={handleChange} required />
                        </Form.Group>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" variant="primary" onClick={() => peticionPost()} >Agregar</Button>
                    <Button className="ms-3" onClick={() => ToogleModalAgregar()} variant="danger">Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={ModalEditar}>
                <ModalHeader>Editar Producto</ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="id" name="id" readOnly value={NewData && NewData.id} required />
                            <br />
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange} value={NewData && NewData.nombre} required />
                            <br />
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Descripción" name="descripcion" onChange={handleChange} value={NewData && NewData.descripcion} required />
                        </Form.Group>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" variant="primary" onClick={() => peticionPut()} >Editar</Button>
                    <Button className="ms-3" onClick={() => ToogleModalEditar()} variant="danger">Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={ModalEliminar}>
                <ModalHeader>Eliminar Servicio</ModalHeader>
                <ModalBody>
                    ¿Está seguro de eliminar el Servicio {NewData.nombre} de la base de datos?
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" variant="primary" onClick={() => peticionDelete()} >Confirmar</Button>
                    <Button className="ms-3" onClick={() => ToogleModalEliminar()} variant="danger">Cancelar</Button>
                </ModalFooter>
            </Modal>

        </>
    )

}