import React from 'react'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => navigateTo('/thanks/'))
      .catch(error => alert(error));
    e.preventDefault();
  };

  render () {
    return (
      <form
        id="contact"
        name="contact"
        data-netlify="true"
        method="POST"
        action="/thank-you"
        onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="hidden" name="form-name" value="contact"  onChange={this.handleChange} />
        <input type="text" id="name" name="name" required  onChange={this.handleChange} />
        <label>Email</label>
        <input type="email" id="email" name="email" required onChange={this.handleChange} />
        <label>Message</label>
        <textarea type="text" id="message" name="message" required onChange={this.handleChange} />
        <ul className="actions">
          <li><button type="submit" className="button">{this.props.callToAction}</button></li>
        </ul>
      </form>
    );
  }
}

export default ContactForm
