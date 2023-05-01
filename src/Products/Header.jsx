import { useState } from "react";
import "./styles/styles.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";

export const Header = ({ isSignedIn }) => {
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
              {isSignedIn ? (
                <>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products">
                    Products
                  </Nav.Link>
                  <Nav.Link as={Link} to="/posts">
                    Posts
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Cart />
      </Navbar>
    </>
  );
};
