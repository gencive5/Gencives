import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './assets/logogencives.png';


function App() {

  
  return (


    <Container fluid={true} classname="custom-container">
      <Row>
        <Col sm={8}>
          <img src={logo} alt="logo" className='logo'/>
          <p>scroll</p>
        </Col>
        <Col sm={4}><div className="touch-zone"></div></Col>
      </Row>
    </Container>
  );
}



export default App;
