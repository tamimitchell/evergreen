import React from 'react'
import Img from "gatsby-image";

const FourUp = (props) => {
  const images = [
    props.image1,
    props.image2,
    props.image3,
    props.image4
  ];

  return (
    <div className="row 50% uniform">
      {images.map((image, index) =>
        <div key={index} className="6u">
          <span className="image fit">
            <img src={image.image} />
          </span>
        </div>
      )}
      <p></p>
    </div>
  );
}

export default FourUp
