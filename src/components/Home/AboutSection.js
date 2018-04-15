import React from 'react'
import Img from 'gatsby-image'
import FourUp from '../Images/FourUp'

const AboutSection = (props) => {
  return (
    <section id="five" className="wrapper style1 special alt">
      <div className="inner">
        <h2>Welcome to Evergreen</h2>
        <div className="row">
          <div className="6u 12u(small)">
            <FourUp
              image1URL="../images/about-me-1.jpg"
              image2URL="../images/about-me-2.jpg"
              image3URL="../images/about-me-3.jpg"
              image4URL="../images/about-me-4.jpg"
            />
          </div>
          <div className="6u 12u$(small) align-left ">
            <h4>Hiya, I'm Tami Mitchell!</h4>
            <p>I'm a full time RVer with my pup Belle, chasing a full life and new adventures. I work as a web developer, and I love travel, hiking, technology, reading and music. I chose the name Evergreen because I feel like it really reflects who I am - I love exploring and learning, and I’ve found I’m happiest when I’m in an state of constant growth, and along the way I find awesome things that I want to share. And I love pine trees too!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
