import React from 'react'
import Img from "gatsby-image";

const FourUp = (props) => {
  const images = [
    props.image1URL,
    props.image2URL,
    props.image3URL,
    props.image4URL
  ];

  return (
    <div className="row 50% uniform">
      {images.map((image, index) =>
        <div key={index} className="6u">
          <span className="image fit">
            <img src={image} />
          </span>
        </div>
      )}
      <p></p>
    </div>
  );
}

export default FourUp
