import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './assets/logogencives.png';




function App() {

  
  return (
    <Container-fluid>
      <Row>
        <Col sm={8} className="p-0">
          <img src={logo} alt="logo" className='logo'/>
          <p>scroll</p>
        </Col>
        <Col sm={4} className="p-0"><div className="touch-zone"></div></Col>
      </Row>
    </Container-fluid>
  );
}




export default App;
