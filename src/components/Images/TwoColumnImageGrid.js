import React from 'react'
import Img from "gatsby-image";

const TwoColumnImageGrid = (props) => {
  let useGatsbyImage = false;
  let useStandardImage = false;
  let images = [];

  if (props.images) {
    useGatsbyImage = true;
    images = props.images;
  } else if (props.imageurls) {
    useStandardImage = true;
    images = JSON.parse(props.imageurls);
  }

  return (
    <div className="row 50% uniform">

      {useGatsbyImage == true &&
        images.map((image, index) =>
          <div key={index} className="6u">
            <span className="image fit">
              <Img sizes={image.node.sizes} />
            </span>
          </div>
        )}

      {useStandardImage == true &&
        images.map(image =>
          <div className="6u">
            <span className="image fit">
              <img src={image} />
            </span>
          </div>
        )}

    </div>
  );
}

export default TwoColumnImageGrid
