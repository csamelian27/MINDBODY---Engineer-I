import React from 'react';

class UpdateModal extends React.Component {

  state = {
    name: this.props.contact.name,
    phone: this.props.contact.phone,
    email: this.props.contact.email,
    index: this.props.contact.index
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleClickUpdate();
    this.props.handleUpdateContact(this.state);
  }

  render() {
    let { name, phone, email } = this.state;
    return(
      <div className="update-modal">
        <form className="update-form" onSubmit={this.handleSubmit}>
          <h2 className="update-form-header">Update {this.props.contact.name}'s Contact!</h2><br></br>
          <input type="text" name="name" value={name} onChange={this.handleChange}></input>
          <input type="text" name="phone" value={phone} onChange={this.handleChange}></input>
          <input type="text" name="email" value={email} onChange={this.handleChange}></input>
          <button>Update Contact!</button>
        </form>
      </div>
    )
  }
}

export default UpdateModal;
