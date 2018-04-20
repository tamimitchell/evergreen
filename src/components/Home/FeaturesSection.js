import React from 'react'
import Feature from './Feature'

const FeaturesSection = (props) => {
  const content = props.content;
  const features = content.features;

  return (
    <section id="one" className="wrapper style1 special">
      <div className="inner style3">
        <header className="major alt style2">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </header>
        <section className="features">
          {features.map((feature, index) =>
            <Feature feature={feature} key={index} />
          )}
        </section>
        <footer className="major">
          <h4>{content.blurb}</h4>
          <ul className="actions">
            <li><a data-scroll href="#contact" className="button">{content.callToAction}</a></li>
          </ul>
        </footer>
      </div>
    </section>
  );
}

export default FeaturesSection
