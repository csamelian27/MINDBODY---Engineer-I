import React from 'react';

class ContactForm extends React.Component {

  state = {
    name: "",
    phone: "",
    email: "",
    index: 0
    index: this.props.count
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddContact(this.state)
    this.setState({
      name: "",
      phone: "",
      email: "",
      index: this.props.allContacts.length + 1
      email: ""
    })
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
        <button>Submit Contact!</button>
      </form>
    )
  }

}

export default ContactForm;
