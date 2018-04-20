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
          netlify="true"
          method="POST"
          onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" id="name" name="name" required />
          <label>Email</label>
          <input type="email" id="email" name="_replyto" required />
          <label>Message</label>
          <textarea type="text" id="message" name="message" required />
          <ul className="actions">
            <li><button type="submit" className="button">{this.props.callToAction}</button></li>
          </ul>
        </form>
      );
    } else {
      return (
        <p>{this.props.thankYouMessage}</p>
      )
    }
  }
}

export default ContactForm
