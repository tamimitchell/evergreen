import React from 'react'
import Img from 'gatsby-image'
import FourUp from '../Images/FourUp'

const AboutSection = (props) => {
  const content = props.content;

  return (
    <section id="five" className="wrapper style1 special alt">
      <div className="inner">
        <h2>{content.title}</h2>
        <div className="row">
          <div className="6u 12u(small)">
            <FourUp
              image1={content.image1}
              image2={content.image2}
              image3={content.image3}
              image4={content.image4}
            />
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
