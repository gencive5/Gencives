import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import grass from '../assets/images/touchcesare.jpg';
import kontrolle from '../assets/images/touchkontrolle.jpg';
import adelia from '../assets/images/touchadelia.jpg';
import usa from '../assets/images/touchusa9.jpg';



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
        <img className="carousel-touch" src={kontrolle} alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-touch" src={adelia} alt="Slide 3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-touch" src={usa} alt="Slide 4" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SecondCarousel;


