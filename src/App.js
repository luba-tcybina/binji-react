import React from 'react';
import './App.css';
// Bootstrap stuff
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Main />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 1 }}>
            <Search />
          </Col>
          <Col md={{ span: 3, offset: 4 }}>
            <Dropdown />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
