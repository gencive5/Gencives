import Carousel from 'react-bootstrap/Carousel';
import gandia from '../assets/images/sea.webp';
import kontrolle from '../assets/images/KontrolleMax.webp';
import adelia from '../assets/images/tangle.webp';
import trash from '../assets/images/trash.webp';
import usa from '../assets/images/transat.webp';
import elastic from '../assets/images/pink.webp';
import online from '../assets/images/OnlineMax.webp';
import emma from '../assets/images/lighters.webp';

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
            className="carousel-img"
            src={kontrolle}
            alt="Slide 1"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="carousel-img"
            src={gandia}
            alt="Slide 2"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="carousel-img"
            src={adelia}
            alt="Slide 3"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="carousel-img"
            src={usa}
            alt="Slide 4"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="carousel-img"
            src={elastic}
            alt="Slide 5"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="carousel-img"
            src={online}
            alt="Slide 6"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="carousel-img"
            src={emma}
            alt="Slide 7"
          />
        </div>
      </Carousel.Item>
       <Carousel.Item>
        <div className="carousel-item-wrapper">
          <img
            className="carousel-img"
            src={trash}
            alt="Slide 8"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstCarousel;
