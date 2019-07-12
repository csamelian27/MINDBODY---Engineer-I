import React from 'react';

class ContactForm extends React.Component {

  state = {
    name: "",
    phone: "",
    email: "",
    index: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddContact(this.state)
    this.props.renderContactForm();
    this.setState({
      name: "",
      phone: "",
      email: "",
      index: this.props.allContacts.length + 1
    })
  }

  render() {
    console.log(this.state);
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
        <input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange}></input>
        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
        <button>Add Contact!</button>
      </form>
    )
  }

}

export default ContactForm;
