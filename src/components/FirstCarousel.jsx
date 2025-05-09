import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gandia from '../assets/images/GandiaMax.jpg';
import kontrolle from '../assets/images/KontrolleMax.jpg';
import adelia from '../assets/images/adeliaMAX.jpg';
import usa from '../assets/images/usukMax.jpg';
import elastic from '../assets/images/ElasticMax.jpg';
import online from '../assets/images/OnlineMax.jpg';
import emma from '../assets/images/Emma5Max.jpg';

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
        <div className="carousel-item-wrapper">
          <img
            className="d-block carousel-img"
            src={kontrolle}
            alt="Slide 1"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="d-block carousel-img"
            src={gandia}
            alt="Slide 2"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="d-block carousel-img"
            src={adelia}
            alt="Slide 3"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="d-block carousel-img"
            src={usa}
            alt="Slide 4"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="d-block carousel-img"
            src={elastic}
            alt="Slide 5"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="d-block carousel-img"
            src={online}
            alt="Slide 6"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="d-block carousel-img"
            src={emma}
            alt="Slide 7"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstCarousel;
