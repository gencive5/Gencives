import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import logo from './assets/logogencives.png';
import somnanbule from './assets/images/somnanbule.jpg';
import waterhouse from './assets/images/waterhouse.jpg';
import leanne from './assets/images/leanne.jpg';
import fastbraces from './assets/images/fastbraces.jpg';
import grass from './assets/images/touchgrass.jpg';
import water from './assets/images/touchwater.jpg';
import dress from './assets/images/touchleanne.jpg';
import touch from './assets/images/touchtouch.jpg';

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
    const newActiveIndex = activeIndex === 0 ? 4 : activeIndex - 1;
    setActiveIndex(newActiveIndex);
    setActiveIndex2(newActiveIndex);
  };

  const handleNext = () => {
    const newActiveIndex = (activeIndex + 1) % 5;
    setActiveIndex(newActiveIndex);
    setActiveIndex2(newActiveIndex);
  };

  return (
    <Container fluid className="custom-container">
      <Row>
        <Col sm={4} className="d-flex">
          <img src={logo} alt="Logo" className="logo" />
         
          <div className="main-zone">
             {/* Custom previous and next indicators */}
             
          <div className="mt-3 previousnext">
          <p>scroll</p>
          
            <button className="btn btn-primary" onClick={handlePrevious}>
              previous
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
              next
            </button>
          </div>
          <Carousel
            interval={null}
            activeIndex={activeIndex}
            indicators={false}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          >
            {/* Slides */}
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                
                src={somnanbule}
                alt="Slide 1"
              />
            </Carousel.Item>
           
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
              
                src={waterhouse}
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                
                src={leanne}
                alt="Slide 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
               
                src={fastbraces}
                alt="Slide 4"
              />
            </Carousel.Item>
            
          </Carousel>
          </div>
          
        </Col>

        <Col className="d-flex">
          {/* Touch zone for the second carousel */}
          <div className="touch-zone">
            <Carousel
              interval={null}
              activeIndex={activeIndex2}
              indicators={false}
              onSelect={(selectedIndex) => setActiveIndex2(selectedIndex)}
            >
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-touch"
                
                src={grass}
                alt="Slide 1"
              />
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-touch"
               
                src={water}
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-touch"
               
                src={dress}
                alt="Slide 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-touch"
               
                src={touch}
                alt="Slide 4"
              />
            </Carousel.Item>
            
            </Carousel></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;





