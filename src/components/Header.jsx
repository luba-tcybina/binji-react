import React from 'react';
// Bootstrap stuff
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// Images
import Logo from '../images/logo.gif';
const Header = () => {
  return (
    <Navbar sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#tv">TV</Nav.Link>
          <Nav.Link href="#film">FILM</Nav.Link>
          <Nav.Link href="#pc">PC</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;