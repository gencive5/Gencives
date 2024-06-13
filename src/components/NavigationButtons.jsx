import React from 'react';
import ArrowTop from '../assets/arrowtop.svg';
import ArrowBottom from '../assets/arrowbottom.svg';
import '../App.css';


function NavigationButtons({ handlePrevious, handleNext }) {
  return (
    <div className="mt-3 previousnext">
      <button className="custom-btn" onClick={handlePrevious}>
        <div>
          
          <img style={{ height: 15 }} src={ArrowTop} alt="Previous" />
        </div>
      </button>

      <button className="custom-btn" onClick={handleNext}>
        <div>
          
          <img style={{ height: 15 }} src={ArrowBottom} alt="Next" />
        </div>
      </button>
    </div>
  );
}

export default NavigationButtons;
