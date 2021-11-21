import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function GestorPlatos() {
    const baseurl = "https://api-cartoon-pizza20211121114915.azurewebsites.net/api/productos"
    const [data, setData] = useState([]);
    const [ModalAgregar, SetModalAgregar] = useState(false);
    const [ModalEditar, SetModalEditar] = useState(false);
    const [ModalEliminar, SetModalEliminar] = useState(false);

    const [NewData, setNewData] = useState({
        id: '',
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: ''
    })

    const handleChange = e =>{
        const{ name, value} = e.target;
        setNewData(
            {...NewData, [name]: value}
        );
    }

    const ToogleModalAgregar = () =>{
        SetModalAgregar(!ModalAgregar);
    }

    const ToogleModalEditar = () =>{
        SetModalEditar(!ModalEditar);
    }

    const ToggleModalEliminar = () => {
        SetModalEliminar(!ModalEliminar);
    }

    const SelectOpcion = (datos, caso) =>{
        setNewData(datos);
        if(caso === "Editar")
        {
            ToogleModalEditar();
        }
        if(caso === "Eliminar")
        {
            ToggleModalEliminar();
        }
    }

    const peticionGet = async () => {
        await axios.get(baseurl).then(response => setData(response.data)).catch(error => console.error(error));
    }

    const peticionPost = async() => {
        delete NewData.id;
        NewData.precio = parseInt(NewData.precio);
        await axios.post(baseurl, NewData).then(response => {
            setData(data.concat(response.data))
            ToogleModalAgregar();
            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'El producto se ha agregado correctamente a la base de datos',
                confirmButtonColor: '#3085d6'
            })
        }).catch(error => console.error(error));
    }

    const peticionPut = async() => {
        NewData.precio = parseInt(NewData.precio);
        await axios.put(baseurl + "/" + NewData.id, NewData).then(response =>{
            var res = response.data;
            var dataAux = data;
            // eslint-disable-next-line array-callback-return
            dataAux.map(datos => {
                if(datos.id === NewData.id)
                {
                    datos.nombre = res.nombre;
                    datos.descripcion = res.descripcion;
                    datos.precio = res.precio;
                    datos.imagen = res.imagen;
                }
            })
            ToogleModalEditar();

            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'El producto se ha editado correctamente',
                confirmButtonColor: '#3085d6'
            })

            

        }).catch(error => console.error(error));
      
    }

    const peticionDelete = async() => {
        await axios.delete(baseurl + "/" + NewData.id).then(response => {
            setData(data.filter(datos => datos.id !== response.data));
            ToggleModalEliminar();
            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'El producto se ha eliminado de la base de datos correctamente',
                confirmButtonColor: '#3085d6'
            })
        })
    }

    useEffect(() => { peticionGet(); }, []);

    return (
        <>
            <h1 className="text-center mt-4 ms-4"> Gestiona los productos de tu restaurante</h1>
            <Button className="d-block mx-auto mt-5" variant="dark" onClick={() => ToogleModalAgregar()}>Agregar Nuevo Producto</Button>
            <div className="contenedor_productos mt-5 me-5 ms-5">

                {data.map(product => {
                    return (
                        <Card className="card-productos mt-3" key={product.id}>
                            <Card.Img
                                variant="top"
                                className="imagen-productos img-fluid rounded mx-auto d-block"
                                src={(product.imagen)}
                                id={"imagen_" + product.id}
                                key={product.id}
                            />
                            <Card.Body className="ms-4">
                                <Card.Title
                                    className="fw-bold"
                                    id={"nombre_" + product.id}
                                >
                                    {product.nombre}
                                </Card.Title>
                                <Card.Text id={"des_" + product.id}>
                                    {product.descripcion}
                                </Card.Text>
                                <Card.Text
                                    className="fs-4"
                                    id={"precio_" + product.id}>
                                    {"Precio: $" + product.precio}
                                </Card.Text>

                                
                                <div className="botones_detalles">
                                    <Button
                                        variant="dark"
                                        id={"editar_" + product.id}
                                        key = {"editar_" + product.id}                                       
                                        onClick = {() => SelectOpcion(product,"Editar")}
                                        >
                                        Editar
                                    </Button>
                                    <Button
                                        className="mt-2"
                                        variant="danger"
                                        id={"eliminar_" + product.id}   
                                        style = {{backgroundColor: "red"}}
                                        onClick = {() => SelectOpcion(product,"Eliminar")}                                   
                                    >
                                        Eliminar
                                    </Button>
                                </div>

                            </Card.Body>
                        </Card>

                    );
                })}

            </div>

            <Modal isOpen={ModalAgregar}>
                <ModalHeader>Agregar un nuevo producto a tu restaurante</ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange} required/>
                            <br />
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3}  placeholder="Descripción" name="descripcion" onChange={handleChange} required/>
                            <br />
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="Precio (ejemplo: 20000)" name="precio" onChange={handleChange} required/>
                            <br />
                            <Form.Label>Link imagen del producto</Form.Label>
                            <Form.Control type="text" placeholder="Link imagen" name="imagen" onChange={handleChange} required/>
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
                            <Form.Control type="text" placeholder="id" name="id" readOnly value={NewData && NewData.id} required/>
                            <br />
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange} value={NewData && NewData.nombre} required/>
                            <br />
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Descripción" name="descripcion" onChange={handleChange} value={NewData && NewData.descripcion} required/>
                            <br />
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="Precio" name="precio" onChange={handleChange} value={NewData && NewData.precio} required/>
                            <br />
                            <Form.Label>Link imagen</Form.Label>
                            <Form.Control type="text" placeholder="Link imagen" name="imagen" onChange={handleChange} value={NewData && NewData.imagen} required/>
                        </Form.Group>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" variant="primary" onClick={() => peticionPut()} >Editar</Button>
                    <Button className="ms-3" onClick={() => ToogleModalEditar()} variant="danger">Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={ModalEliminar}>
                <ModalHeader>Eliminar Producto</ModalHeader>
                <ModalBody>
                    ¿Está seguro de eliminar el Producto {NewData.nombre} de la base de datos?
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" variant="primary" onClick={() => peticionDelete()} >Confirmar</Button>
                    <Button className="ms-3" onClick={() => ToggleModalEliminar()} variant="danger">Cancelar</Button>
                </ModalFooter>
            </Modal>
        </>
    )

}