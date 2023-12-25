

import React from 'react';
import FlecheHaut from '../assets/flechehaut.svg';
import FlecheBas from '../assets/flechebas.svg';
import '../App.css';


function NavigationButtons({ handlePrevious, handleNext }) {
  return (
    <div className="mt-3 previousnext">
      <button className="custom-btn" onClick={handlePrevious}>
        <div>
          <p>Previous</p>
          <img style={{ height: 20 }} src={FlecheHaut} alt="Previous" />
        </div>
      </button>

      <button className="custom-btn" onClick={handleNext}>
        <div>
          <p>Next</p>
          <img style={{ height: 20 }} src={FlecheBas} alt="Next" />
        </div>
      </button>
    </div>
  );
}

export default NavigationButtons;
