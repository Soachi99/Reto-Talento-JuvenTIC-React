import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Logo from "../images/logo_banner.png";
import Cart from "../images/cart.png";

import './topbar.css';


class topbar extends React.Component {
    render() {
        return (
            <>
                <Navbar className="topbar-container" variant="dark" expand="xl">
                    <Container>
                        <img src={Logo} className="logo" alt="Logo" />

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="options ms-auto mb-2 mb-xl-0">
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href=""><b> Inicio </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href=""><b> Nosotros </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href=""><b> Menú </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href=""><b> Servicios </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" href=""><b> Contactanos </b></Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item" > <Nav.Link className="nav-link" id="cart" href="">
                                    <img src={Cart} id="carrito" alt="carrito"/>
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