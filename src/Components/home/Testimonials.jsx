// Testimonials.jsx
import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Geraldina Durrell',
    testimony: `While we were used to working with a lot of ad agencies for different parts of our campaigns, last year, after a refreshingly successful ad campaign by these guys, we've decided to handle all of our activities to them!`,
    image: `${process.env.PUBLIC_URL}/Images/profil1.jpg`
  },
  {
    name: 'Geraldina Durrell',
    testimony: `While we were used to working with a lot of ad agencies for different parts of our campaigns, last year, after a refreshingly successful ad campaign by these guys, we've decided to handle all of our activities to them!`,
    image: `${process.env.PUBLIC_URL}/Images/profil2.jpg`

  },
  {
    name: 'Geraldina Durrell',
    testimony: `While we were used to working with a lot of ad agencies for different parts of our campaigns, last year, after a refreshingly successful ad campaign by these guys, we've decided to handle all of our activities to them!`,
    image: `${process.env.PUBLIC_URL}/Images/profil3.jpg`

  },
 
  // Ajoutez plus de témoignages ici
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials">
      <h2>Temoignages</h2>
      <p className="intro-text">Ayant contribué à augmenter les ventes de dizaines d’entreprises jusqu’à présent, beaucoup de nos clients ont écrit de belles critiques !
      </p>
      <div className="testimonial-container">
        <div className="testimonial">
          <div className="testimonial-border-top"></div>
          <div className="testimonial-content">
            <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].name} className="testimonial-image"/>
            <p className="testimonial-text">{testimonialsData[currentIndex].testimony}</p>
            <h4 className="testimonial-name">- {testimonialsData[currentIndex].name}</h4>
          </div>
          <div className="testimonial-border-bottom"></div>
        </div>
        <div className="dots">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
