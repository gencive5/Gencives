import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gif1 from '../assets/gifs/gif1.gif';
import gif2 from '../assets/gifs/gif2.gif';
import gif3 from '../assets/gifs/gif3.gif';
import gif4 from '../assets/gifs/gif4.gif';
import gif5 from '../assets/gifs/gif5.gif';
import gif6 from '../assets/gifs/gif6.gif';
import gif7 from '../assets/gifs/gif7.gif';

const gifSlides = [gif1, gif2, gif3, gif4, gif5, gif6, gif7];

function GifCarousel({ activeIndex }) {
  return (
    <Carousel
      interval={null}
      activeIndex={activeIndex}
      indicators={false}
      controls={false}
      className="carousel slide transform carousel-fade"
    >
      {gifSlides.map((gif, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-item-wrapper">
            <img className="d-block carousel-img" src={gif} alt={`Gif Slide ${index + 1}`} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default GifCarousel;
