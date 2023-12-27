import React, { useRef, useEffect } from 'react';
import { Curtains, Plane } from 'curtainsjs';

function CurtainsComponent({ images }) {
  const curtainsRef = useRef(null);
  const planeRefs = useRef([]);

  useEffect(() => {

    console.log('CurtainsComponent useEffect');

    const curtains = new Curtains({
      // Configure curtains instance here as needed
    });

    images.forEach((imageSrc) => {

      console.log('Creating plane for image:', imageSrc);

      const plane = new Plane(curtains, {
        // Configure planes for images
        texturesOptions: {
          source: imageSrc,
        },
        // Other configurations and shaders
      });

      planeRefs.current.push(plane);
    });

    curtainsRef.current = curtains;

    return () => {

      console.log('CurtainsComponent cleanup');

      curtains.dispose();
    };
  }, [images]);

  return null; // No need to render anything directly from this component
}

export default CurtainsComponent;
