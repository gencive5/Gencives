// NavigationButtons.jsx
import React from 'react';
import FlecheHaut from '../assets/flechehaut.svg';
import FlecheBas from '../assets/flechebas.svg';

function NavigationButtons({ handlePrevious, handleNext }) {
  return (
    <div className="previousnext">
      <button className="custom-btn" onClick={handlePrevious}>
        <div>
          <p>okay</p>
        </div>
        <img style={{ height: 20 }} src={FlecheHaut} alt="Previous" />
      </button>

      <button className="custom-btn" onClick={handleNext}>
        <p>okay</p>
        <img style={{ height: 20 }} src={FlecheBas} alt="Next" />
      </button>
    </div>
  );
}

export default NavigationButtons;
