import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css';

function HomeCarousel() {
  return (
    <div className="carousel-container">

      <Carousel controls={false} indicators={false} interval={2000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/Images/image1.jpg'}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/Images/image2.jpg'}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/Images/image3.jpg'}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="carousel-overlay">
        <div className="carousel-content">
      <div className="rgba">
      <h1>Faites confiance à <span className="highlight">PUMA</span></h1>
          <p>
          pour booster votre visibilité. Forts de notre expérience avec des centaines d'entreprises, nous créons des campagnes qui font la différence!
          </p>
      </div>

         
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
