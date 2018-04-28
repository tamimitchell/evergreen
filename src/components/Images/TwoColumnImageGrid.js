import React from 'react'
import Img from "gatsby-image";

const TwoColumnImageGrid = (props) => {
  return (
    <div className="row 50% uniform">
      {props.images.map((image, index) =>
        <div key={index} className="6u">
          <span className="image fit">
            <Img sizes={image.node.sizes} />
          </span>
        </div>
      )}
      <p></p>
    </div>
  );
}

export default TwoColumnImageGrid
