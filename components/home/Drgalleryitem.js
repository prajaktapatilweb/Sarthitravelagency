import React from 'react';
import Image from 'next/image';

const Drgalleryitem = ({ item }) => {
  // Define an array of alt texts for each image
const altTexts = [
  "Smile Solution"
 
];
    return (

  <div
    style={{
      margin:4,
      overflow: 'hidden', // Ensure the image does not overflow
     
    }}
  >
 <Image
  alt={altTexts}
  src={`/images/clinic/clinics${item}.jpg`}
  width={580} // Set a specific width
  height={650} // Set a specific height
  layout="intrinsic" // Scales the image proportionally
  className="item"
  style={{
    borderBottomRightRadius: '75px',
  }}
/>

  </div>

    );
};
export default Drgalleryitem;
