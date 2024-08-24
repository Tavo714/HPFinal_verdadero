import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container >
        <Navbar.Brand as={Link} to="/">Biblioteca</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            
            
            <NavDropdown title="Usuarios" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/usuarios-penalizados">Penalizados</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/usuarios-inactivos">Inactivos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Libros" id="more-nav-dropdown">
              <NavDropdown.Item as={Link} to="/libros-no-devueltos">Libros No Devueltos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/libros-Inactivos">Libros inactivos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Proximamente..</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
