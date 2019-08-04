import React from 'react';
// Bootstrap stuff
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar fixed="bottom">
      <Container>
        <div className="footer">some text</div>
      </Container>
    </Navbar>
  );
};

export default Header;