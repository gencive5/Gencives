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
import shycat from './assets/images/shycat.jpg';
import waterhouse from './assets/images/waterhouse.jpg';
import leanne from './assets/images/leanne.jpg';
import fastbraces from './assets/images/fastbraces.jpg';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [glow, setGlow] = useState(false);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!canScroll) return;

      setCanScroll(false);
      setTimeout(() => setCanScroll(true), 1800); // Adjust this timeout value as needed for the pause

      const delta = Math.sign(event.deltaY); // Get scroll direction (1 for down, -1 for up)
      const newIndex = (activeIndex + delta) % 6; // Total number of slides is 6

      if (newIndex >= 0) {
        setActiveIndex(newIndex);
      } else {
        setActiveIndex(5); // Go to the last slide if scrolling up from the first slide
      }
    };

    const interval = setInterval(() => {
      setGlow((prevState) => !prevState); // Toggle glow state
    }, 1500); // Adjust the interval duration as needed

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [activeIndex, canScroll]);

  const handleLogoClick = () => {
    setActiveIndex(1);
  };

  return (
    <Container fluid className="custom-container main-zone">
      <Row>
        <Col sm={8} className="d-flex align-items-center justify-content-center">
          <Carousel
            interval={null}
            activeIndex={activeIndex}
            indicators={false}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          >
            {/* Slides */}
            <Carousel.Item>
              <img
                className={`d-block w-100 logo carousel-img ${glow ? 'glow' : ''}`}
                style={{ objectFit: 'contain' }}
                src={logo}
                alt="Logo"
                onClick={handleLogoClick}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={somnanbule}
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={shycat}
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={waterhouse}
                alt="Slide 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={leanne}
                alt="Slide 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={fastbraces}
                alt="Slide 5"
              />
            </Carousel.Item>
          </Carousel>
           {/* Custom next and previous indicators */}
           <div className="d-flex justify-content-between mt-3 previousnext">
            <button
              className="btn btn-primary"
              onClick={() =>
                setActiveIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1))
              }
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % 6)}
            >
              Next
            </button>
          </div>
        </Col>

        <Col sm={4} className="d-none d-lg-block">
          <div className="touch-zone">{/* Your content for the second column */}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;





