import { useState } from "react";
import "./styles/styles.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar className="main-container">
        <Container>
          <Navbar.Brand>
            <img
              className="logo"
              src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>

              {/* <NavDropdown title="phones" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Samsung</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">iPhone</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Huawei</NavDropdown.Item>
              </NavDropdown> */}
              {/* <NavDropdown title="computer" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Apple</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">HP</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Infinix</NavDropdown.Item>
              </NavDropdown> */}

              {/* <NavDropdown title="outlet" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">...</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">....</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Cart />
      </Navbar>
    </>
  );
};
