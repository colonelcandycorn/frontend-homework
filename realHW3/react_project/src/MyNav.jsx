import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MyNav = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="m-0">
          <Navbar.Brand as={Link} to="/">
            Homework 3
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="justify-content-end me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/list">
              List
            </Nav.Link>
            <Nav.Link as={Link} to="/population">
              Population
            </Nav.Link>
            <Nav.Link as={Link} to="/gdp">
              GDP
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
