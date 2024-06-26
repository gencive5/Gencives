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
  const [activeIndex2, setActiveIndex2] = useState(0); // Second carousel active index
  const [canScroll, setCanScroll] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const canvasRef = useRef(null);


  class GradientShader {
    constructor() {
      this.colorSets = [
        ["#7d7d7d", "#8f8f8f", "#858585", "#828282"],
        ["#FF0000", "#FF7F00", "#FFFF00", "#7FFF00"],
        ["#00FF00", "#007FFF", "#0000FF", "#7F00FF"],
        ["#FF00FF", "#FF007F", "#FF0000", "#FF7F00"],
        ["#FFFF00", "#7FFF00", "#00FF00", "#007FFF"]
      ];
      this.currentSetIndex = 0;
      this.initGradientColors();
    }

    initGradientColors() {
      this.updateCSSVariables(this.colorSets[this.currentSetIndex]);
    }

    updateCSSVariables(colors) {
      document.documentElement.style.setProperty('--gradient-color-1', colors[0]);
      document.documentElement.style.setProperty('--gradient-color-2', colors[1]);
      document.documentElement.style.setProperty('--gradient-color-3', colors[2]);
      document.documentElement.style.setProperty('--gradient-color-4', colors[3]);
    }

    nextSlide() {
      this.currentSetIndex = (this.currentSetIndex + 1) % this.colorSets.length;
      this.updateCSSVariables(this.colorSets[this.currentSetIndex]);
    }
  }

  // Example usage
  const gradientShader = new GradientShader();
  setInterval(() => gradientShader.nextSlide(), 5000); // Change slide every 5 seconds


  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = (event) => {
      if (!canScroll) return;

      clearTimeout(scrollTimeout);
      setCanScroll(false);

      const delta = Math.sign(event.deltaY); // Get scroll direction (1 for down, -1 for up)
      const newIndex = (activeIndex + delta + 4) % 4; // Total number of slides is 4 (0 to 3)

      setActiveIndex(newIndex);
      setActiveIndex2(newIndex);

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

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <Container fluid className="custom-container">
      <Row>
        <Col className="col-first">
          <div className="main-zone">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <p className="texte">scroll</p>

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
