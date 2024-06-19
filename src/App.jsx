import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FirstCarousel from './components/FirstCarousel';
import SecondCarousel from './components/SecondCarousel';
import logo from './assets/logogencives2.png';

function App() {
  const [activeIndex, setActiveIndex] = useState(0); // First carousel active index
  const [activeIndex2, setActiveIndex2] = useState(0); // Second carousel active index
  const [canScroll, setCanScroll] = useState(true);
  const [showContact, setShowContact] = useState(false);

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
                <p className="contact-text">@gencive5 <br></br>vic.segen@gmail.com</p>
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
            <SecondCarousel activeIndex2={activeIndex2} setActiveIndex2={setActiveIndex2} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
