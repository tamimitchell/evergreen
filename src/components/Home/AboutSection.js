import React from 'react'
import Img from 'gatsby-image'
import TwoColumnImageGrid from '../Images/TwoColumnImageGrid'

const AboutSection = (props) => {
  const content = props.content;
  const images = props.images.filter(image => image.node.id.includes('about'));

  return (
    <section id="five" className="wrapper style1 special">
      <div className="inner">
        <header class="major">
          <h2>{content.title}</h2>
        </header>
        <div className="split">
          <div class="alt">
            <TwoColumnImageGrid images={images} />
            <p></p>
          </div>
          <div>
            <h4>{content.subtitle}</h4>
            <p>{content.blurb}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
