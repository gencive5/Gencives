import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import logo from './assets/logogencives.png';
import somnanbule from './assets/images/somnanbule.jpg';
import shycat from './assets/images/shycat.jpg';
import waterhouse from './assets/images/waterhouse.jpg';
import leanne from './assets/images/leanne.jpg';
import fastbraces from './assets/images/fastbraces.jpg';



function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLogoClick = () => {
    setActiveIndex(1);
  };

  const handleCarouselSelect = (selectedIndex) => {
    if (selectedIndex === 6) {
      // Manually reset the active index to the first slide when transitioning from the last slide
      setActiveIndex(0);
    } else {
      setActiveIndex(selectedIndex);
    }
  };

  return (
    <Container fluid={true} className="custom-container">
      <Row>
        <Col sm={8} className="d-flex align-items-center justify-content-center">
          <Carousel
            interval={null}
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
            indicators={false} 
          >
            {/* First Slide - Logo */}
            <Carousel.Item>
              <img
                className="d-block w-100 logo"
                style={{ objectFit: 'contain' }}
                src={logo}
                alt="Logo"
                onClick={handleLogoClick}
              />
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ objectFit: 'contain' }}
                src={somnanbule}
                alt="Slide 1"
              />
            </Carousel.Item>

            {/* Third Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ objectFit: 'contain' }}
                src={shycat}
                alt="Slide 2"
              />
            </Carousel.Item>

            {/* Fourth Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ objectFit: 'contain' }}
                src={waterhouse}
                alt="Slide 3"
              />
            </Carousel.Item>

            {/* Fifth Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ objectFit: 'contain' }}
                src={leanne}
                alt="Slide 4"
              />
            </Carousel.Item>

            {/* Sixth Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ objectFit: 'contain' }}
                src={fastbraces}
                alt="Slide 5"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        
        <Col sm={4} className="d-none d-lg-block">
          <div className="touch-zone">
            {/* Add your content for the second column */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;





