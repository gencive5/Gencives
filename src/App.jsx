import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container';
{/*import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './assets/logogencives.png';
import NavigationButtons from './components/NavigationButtons';
import FirstCarousel from './components/FirstCarousel';

import SecondCarousel from './components/SecondCarousel'; */}

import grass from './assets/images/touchgrass.jpg';
import water from './assets/images/touchwater.jpg';
import dress from './assets/images/touchleanne.jpg';
import touch from './assets/images/touchtouch.jpg';

import Flowmap from "./components/Flowmap";



{/*

function App() {
  const [activeIndex, setActiveIndex] = useState(0); // First carousel active index
  const [activeIndex2, setActiveIndex2] = useState(0); // Second carousel active index
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!canScroll) return;
      
      setCanScroll(false);
      setTimeout(() => setCanScroll(true), 1800); // Adjust this timeout value as needed for the pause

      const delta = Math.sign(event.deltaY); // Get scroll direction (1 for down, -1 for up)
      const newIndex = (activeIndex + delta + 4) % 4; // Total number of slides is 5

      setActiveIndex(newIndex);
      setActiveIndex2(newIndex);
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeIndex, activeIndex2, canScroll]);

  const handlePrevious = () => {
    const newActiveIndex = activeIndex === 0 ? 3 : activeIndex - 1; // Total number of slides is 4 (0 to 3)
    setActiveIndex(newActiveIndex);
    setActiveIndex2(newActiveIndex);
  };
  
  const handleNext = () => {
    const newActiveIndex = (activeIndex + 1) % 4; // Total number of slides is 4 (0 to 3)
    setActiveIndex(newActiveIndex);
    setActiveIndex2(newActiveIndex);
  };
  

  const images = [grass, water, dress, touch]; */}

  export default function App() {

  return (

    <div className="App">

    <Container fluid className="custom-container">

<Flowmap />

      {/* <Row>
        <Col sm={4}>
           <img src={logo} alt="Logo" className="logo" />
          <div className="main-zone">
            <p className="texte">scroll</p>
            
            <NavigationButtons handlePrevious={handlePrevious} handleNext={handleNext} />

            <FirstCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} /> 

            
          </div>
          
        </Col>

        <Col>
          {/* Touch zone for the second carousel */}
         {/* <div className="touch-zone">
          <SecondCarousel activeIndex2={activeIndex2} setActiveIndex2={setActiveIndex2} />
          </div>
        
        </Col>
      </Row> */}
    </Container>

    </div>
  );
}

{/*export default App; */}





