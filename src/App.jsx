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
        <Col sm={8} className="d-flex align-items-center justify-content-center">
          <div className="main-zone">
          <img src={logo} alt="logo" className='logo'/>
          
          </div>
        </Col>
        <Col sm={4} className="d-none d-lg-block"><div className="touch-zone"></div></Col>
      </Row>
    </Container>
  );
}



export default App;

