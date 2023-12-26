import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import grass from '../assets/images/touchgrass.jpg';
import water from '../assets/images/touchwater.jpg';
import dress from '../assets/images/touchleanne.jpg';
import touch from '../assets/images/touchtouch.jpg';
import { Curtains, Plane } from 'curtainsjs';


function SecondCarousel({ activeIndex2, setActiveIndex2 }) {
  return (
    <Carousel
      interval={null}
      activeIndex={activeIndex2}
      indicators={false}
      onSelect={(selectedIndex) => setActiveIndex2(selectedIndex)}
      className="carousel slide transform carousel-fade"
    >
      {/* Slides */}
      <Carousel.Item>
        <img className="carousel-touch" src={grass} alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-touch" src={water} alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-touch" src={dress} alt="Slide 3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-touch" src={touch} alt="Slide 4" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SecondCarousel;


