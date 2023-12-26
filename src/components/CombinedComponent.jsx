import React from 'react';
import CurtainsComponent from './CurtainsComponent';
import SecondCarousel from './SecondCarousel';
import grass from '../assets/images/touchgrass.jpg';
import water from '../assets/images/touchwater.jpg';
import dress from '../assets/images/touchleanne.jpg';
import touch from '../assets/images/touchtouch.jpg';

function CombinedComponent() {
  const images = [grass, water, dress, touch];

  return (
    <div>
      <CurtainsComponent images={images} />
      <SecondCarousel />
      {/* Other content or components */}
    </div>
  );
}

export default CombinedComponent;
