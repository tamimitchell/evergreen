import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = (props) => {
  const content = props.content;

  return (
    <section id="four" className="wrapper style4 special-alt">
      <a href="/thank-you">Test</a>
      <div className="inner split">
        <section>
          <header className="major special">
            <h2>{content.title}</h2>
          </header>
          <p>{content.blurb}</p>
        </section>
        <ContactForm callToAction={content.callToAction} thankYouMessage={content.thankYouMessage} />
      </div>
    </section>
  );
}

export default ContactSection
