import React from 'react'
import Img from 'gatsby-image'
import TwoColumnImageGrid from '../Images/TwoColumnImageGrid'

const AboutSection = (props) => {
  const content = props.content;
  const images = props.images.filter(image => image.node.id.includes('about'));

  return (
    <section id="five" className="wrapper style1 special alt">
      <div className="inner">
        <h2>{content.title}</h2>
        <div className="row">
          <div className="6u 12u(small)">
            <TwoColumnImageGrid images={images} />
          </div>
          <div className="6u 12u$(small) align-left ">
            <h4>{content.subtitle}</h4>
            <p>{content.blurb}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
