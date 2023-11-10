import React, { useState, useEffect } from 'react';
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
    setActiveIndex(1);
  };

  const handleCarouselSlide = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
    if (selectedIndex === 5) {
      // If the last slide is reached, go back to the first slide
      setShowCarousel(false);
      setTimeout(() => {
        setActiveIndex(0);
        setShowCarousel(true);
      }, 0);
    }
  };

  useEffect(() => {
    // Automatically transition to the next slide every 3 seconds
    const interval = setInterval(() => {
      if (activeIndex < 5) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Container fluid={true} className="custom-container">
      <Row>
        <Col sm={8} className="d-flex align-items-center justify-content-center">
          <Carousel
            interval={null}
            activeIndex={activeIndex}
            onSelect={handleCarouselSlide}
          >
            <Carousel.Item>
              <img
                className={`d-block w-100 ${showCarousel ? '' : 'logo'}`}
                src={logo}
                alt="Logo"
                onClick={handleLogoClick}
              />
            </Carousel.Item>
            {[...Array(4)].map((_, index) => (
              <Carousel.Item key={index + 1}>
                <img
                  className="d-block w-100"
                  src={`https://placekitten.com/800/40${index + 1}`}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
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

