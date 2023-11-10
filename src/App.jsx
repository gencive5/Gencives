import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import logo from './assets/logogencives.png';

function App() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLogoClick = () => {
    setShowCarousel(!showCarousel);
    setActiveIndex(1); // Set the activeIndex to the first slide in the carousel
  };

  const handleCarouselSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Container fluid={true} className="custom-container">
      <Row>
        <Col sm={8} className="d-flex align-items-center justify-content-center">
          <Carousel
            interval={null}
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={logo}
                alt="Logo"
                onClick={handleLogoClick}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/800/400"
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/800/401"
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/800/402"
                alt="Slide 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/800/403"
                alt="Slide 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/800/404"
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
