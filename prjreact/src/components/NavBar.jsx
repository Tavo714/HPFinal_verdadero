import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
const NavBar = () => {
  return (
    
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container >
      <Navbar.Brand href="/">Biblioteca</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/libros-no-devueltos">Libros No Devueltos</Nav.Link>
          <Nav.Link href="#pricing">Precios</Nav.Link>
          <NavDropdown title="Más" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Acción 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Acción 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Acción 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  );
};

export default NavBar;
