import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FirstCarousel from './components/FirstCarousel';
import logo from './assets/logogencives2.png';
import { Gradient } from './components/Gradient.js';

function App() {
  const [activeIndex, setActiveIndex] = useState(0); // First carousel active index
  const [canScroll, setCanScroll] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const canvasRef = useRef(null);

  // Initialize gradient
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  // Handle scroll and keyboard events for slide changes
  useEffect(() => {
    if (window.innerWidth > 768) {
      let scrollTimeout;

      const handleScroll = (event) => {
        if (!canScroll) return;

        clearTimeout(scrollTimeout);
        setCanScroll(false);

        const delta = Math.sign(event.deltaY); // Get scroll direction (1 for down, -1 for up)
        const newIndex = (activeIndex + delta + 4) % 4; // Total number of slides is 4 (0 to 3)

        setActiveIndex(newIndex);

        scrollTimeout = setTimeout(() => {
          setCanScroll(true);
        }, 500); // Adjust this value to control the debounce timing
      };

      const handleKeydown = (event) => {
        if (!canScroll) return;

        if (event.key === 'ArrowUp') {
          handlePrevious();
        } else if (event.key === 'ArrowDown') {
          handleNext();
        }
      };

      window.addEventListener('wheel', handleScroll);
      window.addEventListener('keydown', handleKeydown);

      return () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('keydown', handleKeydown);
      };
    }
  }, [activeIndex, canScroll]);

  const handlePrevious = () => {
    const newActiveIndex = activeIndex === 0 ? 3 : activeIndex - 1; // Total number of slides is 4 (0 to 3)
    setActiveIndex(newActiveIndex);
  };

  const handleNext = () => {
    const newActiveIndex = (activeIndex + 1) % 4; // Total number of slides is 4 (0 to 3)
    setActiveIndex(newActiveIndex);
  };

  const toggleContact = () => {
    setShowContact((prev) => !prev); // Toggle the state of showContact
  };

  // Handle click on logo for mobile fade effect
  useEffect(() => {
    const logoContainer = document.querySelector('.logo-container');

    const handleClick = () => {
      logoContainer.classList.add('active');
      setTimeout(() => {
        logoContainer.classList.remove('active');
      }, 2000); // Adjusted to 2 seconds for mobile
    };

    logoContainer.addEventListener('click', handleClick);

    return () => {
      logoContainer.removeEventListener('click', handleClick);
    };
  }, []);

  // Detect mobile and change instruction text
  const isMobile = window.innerWidth <= 768;

  return (
    <Container fluid className="custom-container">
      <Row>
        <Col className="col-first">
          <div className="main-zone">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <p className="texte">{isMobile ? 'swipe' : 'scroll'}</p>

            {showContact && (
              <div className="contact-text-container">
                <p className="contact-text">@gencive5 <br />vic.segen@gmail.com</p>
              </div>
            )}

            <FirstCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

            <div className="contact-container">
              <button
                className={`contact-button ${showContact ? 'active' : ''}`}
                onClick={toggleContact}
              >
                contact
              </button>
            </div>
          </div>
        </Col>

        <Col className="col-second">
          <div className="touch-zone">
            <canvas className="grey-zone" id="gradient-canvas" ref={canvasRef} data-transition-in />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
