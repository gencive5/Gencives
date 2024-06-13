import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import somnanbule from '../assets/images/somnanbule.jpg';
import kontrolle from '../assets/images/kontrolle.jpg';
import adelia from '../assets/images/adelia.jpg';
import usa from '../assets/images/usa.jpg';

function FirstCarousel({ activeIndex, setActiveIndex }) {
  return (
    <Carousel
      interval={null}
      activeIndex={activeIndex}
      indicators={false}
      onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
      className="carousel slide transform carousel-fade"
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
          src={kontrolle}
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={adelia}
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={usa}
          alt="Slide 4"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstCarousel;
