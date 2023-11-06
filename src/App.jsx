import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './assets/logogencives.png';




function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm={8}><img src={logo} alt="logo" className='logo'/></Col>
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <>
      <ResponsiveAutoExample />
      <p>scroll</p>
    </>
  )
}

export default App;
