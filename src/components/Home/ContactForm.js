import React from 'react'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: true};
  }

  handleSubmit = () => {
    this.setState({
      isEditing: false
    });
  }

  render () {
    if (this.state.isEditing) {
      return (
        <form
          id="contact"
          name="contact"
          netlify
          method="POST"
          onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" id="name" name="name" required />
          <label>Email</label>
          <input type="email" id="email" name="_replyto" required />
          <label>Message</label>
          <textarea type="text" id="message" name="message" required />
          <ul className="actions">
            <li><button type="submit" className="button">Send Tami a Message</button></li>
          </ul>
        </form>
      );
    } else {
      return (
        <p>Thank you for your message! Tami will get back to you shortly.</p>
      )
    }
  }
}

export default ContactForm
