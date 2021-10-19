import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import './topbar.css';


class topbar extends React.Component {
    render() {
        return (
            <>
                <Navbar className="topbar-container" variant="dark" expand="xl">
                    <Container>
                        <img src={process.env.PUBLIC_URL + "/images/logo_banner.png"} className="logo" alt="Logo" />

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="options ms-auto mb-2 mb-xl-0">
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href="/"><b> Inicio </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href="/nosotros"><b> Nosotros </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href=""><b> Menú </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href=""><b> Servicios </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href=""><b> Contactanos </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" id="cart" href="">
                                    <img src={process.env.PUBLIC_URL + "/images/cart.png"} id="carrito" alt="carrito" />
                                    <b> Carrito de compras </b> <sub id="numero"> 0 </sub>

                                </Nav.Link> </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default topbar;