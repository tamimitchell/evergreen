import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = (props) => {
  return (
    <section id="four" className="wrapper style4 special-alt">
      <div className="inner split">
        <section>
          <header className="major special">
            <h2>Contact Me</h2>
          </header>
          <p>Let me know if there's something I can help you with, or maybe you just want to say hi. I welcome both!</p>
        </section>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection
