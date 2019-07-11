import React from 'react';

class UpdateModal extends React.Component {

  state = {
    name: this.props.contact.name,
    phone: this.props.contact.phone,
    email: this.props.contact.email
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    this.props.handleClickUpdate(this.state);
  }

  render() {
    return(
      <div className="update-modal">
        <form className="update-form" onSubmit={this.handleUpdateSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
          <button>Update Contact!</button>
        </form>
      </div>
    )
  }
}

export default UpdateModal;
