import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import somnanbule from '../assets/images/somnanbule.jpg';
import waterhouse from '../assets/images/waterhouse.jpg';
import leanne from '../assets/images/leanne.jpg';
import fastbraces from '../assets/images/fastbraces.jpg';

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
          src={waterhouse}
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={leanne}
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={fastbraces}
          alt="Slide 4"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstCarousel;
