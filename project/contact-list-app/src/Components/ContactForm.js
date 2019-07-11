import React from 'react';

class ContactForm extends React.Component {

  state = {
    name: "",
    phone: "",
    email: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting!");
    this.props.handleAddContact()
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
        <button>Submit Contact!</button>
      </form>
    )
  }

}

export default ContactForm;
