import React from 'react'
import Feature from './Feature'

const FeaturesSection = (props) => {
  const features = [
    {
      title: 'Full Stack Web Development',
      blurb: 'I specialize in writing high quality web applications using Ruby on Rails, JavaScript, and responsive web development.',
      icon_class: 'icon fa-diamond style2'
    },
    {
      title: 'Websites for Small Businesses',
      blurb: 'Need a website? I build portfolio sites emphasizing on being easily customizable, lightning quick loading speed, and modern design for all screen sizes.',
      icon_class: 'icon fa-magic style2'
    }
  ]

  return (
    <section id="one" className="wrapper style1 special">
      <div className="inner style3">
        <header className="major alt style2">
          <h2>I build digital tools</h2>
          <p></p>
        </header>
        <section className="features">
          {features.map((feature, index) =>
            <Feature feature={feature} key={index} />
          )}
        </section>
        <footer className="major">
          <h4>I can help you with your next project!</h4>
          <ul className="actions">
            <li><a data-scroll href="#contact" className="button">Contact Me</a></li>
          </ul>
        </footer>
      </div>
    </section>
  );
}

export default FeaturesSection
