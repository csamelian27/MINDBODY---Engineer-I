import React from 'react';

class ContactForm extends React.Component {

  state = {
    name: "",
    phone: "",
    email: "",
    index: Date.now()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { name, phone, email } = this.state;
    if(name !== "") {
      this.props.handleAddContact(this.state)
      this.props.renderContactForm();
      this.setState({
        name: "",
        phone: "",
        email: "",
        index: Date.now()
      })
    } else {
      alert("Please enter a name for this contact!")
    }
  }

  render() {
    console.log(this.state);
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <h2 className="contact-form-header">Create a New Contact!</h2><br></br>
        <input type="text" name="name" placeholder="Name (required)" value={this.state.name} onChange={this.handleChange}></input>
        <input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange}></input>
        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
        <button>Add Contact!</button>
      </form>
    )
  }

}

export default ContactForm;
