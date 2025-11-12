import React, { useState, useEffect, useRef, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FirstCarousel from './components/FirstCarousel';
import logo from './assets/logogencives2.png';
import { Gradient } from './components/Gradient.js';
import GifCarousel from './components/GifCarousel';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [fontSize, setFontSize] = useState('1rem');
  const canvasRef = useRef(null);

   // Adjust font size based on logo container width
   const adjustFontSize = useCallback(() => {
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
      const logoWidth = logoContainer.clientWidth;
      const newFontSize = logoWidth * 0.1; // Adjust the multiplier as needed for appropriate scaling
      setFontSize(`${newFontSize}px`);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      adjustFontSize();
    };

    const handleOrientationChange = () => {
      adjustFontSize();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    // Initial font size adjustment
    adjustFontSize();

    // Recheck the dimensions after a short delay to ensure everything is rendered correctly
    setTimeout(adjustFontSize, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [adjustFontSize]);

  // Force re-render on initial load
  useEffect(() => {
    adjustFontSize();
  }, []);
  

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

        const delta = Math.sign(event.deltaY);
        const newIndex = (activeIndex + delta + 8) % 8;

        setActiveIndex(newIndex);

        scrollTimeout = setTimeout(() => {
          setCanScroll(true);
        }, 800);
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
    const newActiveIndex = activeIndex === 0 ? 3 : activeIndex - 1;
    setActiveIndex(newActiveIndex);
  };

  const handleNext = () => {
    const newActiveIndex = (activeIndex + 1) % 8;
    setActiveIndex(newActiveIndex);
  };

  const toggleContact = () => {
    setShowContact((prev) => !prev);
  };

  // Handle click on logo for mobile fade effect
  useEffect(() => {
    const logoContainer = document.querySelector('.logo-container');

    const handleClick = () => {
      logoContainer.classList.add('active');
      setTimeout(() => {
        logoContainer.classList.remove('active');
      }, 2000);
    };

    logoContainer.addEventListener('click', handleClick);

    return () => {
      logoContainer.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Container fluid className="custom-container">
      <Row className="no-gutters">
        <Col sm={12} md={8} className="col-first">
          <div className="main-zone">
            <div className="logo-carousel-container">
              <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
              </div>
              <FirstCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
              <p className="texte">{window.innerWidth <= 768 ? 'swipe' : 'scroll'}</p>
            
              {showContact && (
              <div className="contact-text-container">
                <p className="contact-text" style={{ fontSize }}>@gencive5 <br />vic.segen@gmail.com</p>
              </div>
              )}
              </div>

            
          </div>
        </Col>
        <Col sm={12} md={4} className="col-second">
        <GifCarousel activeIndex={activeIndex} />
        </Col>
      </Row>
      <div className="contact-container">
        <button className={`contact-button ${showContact ? 'active' : ''}`} onClick={toggleContact}>
          contact
        </button>
      </div>
    </Container>
  );
}

export default App;
