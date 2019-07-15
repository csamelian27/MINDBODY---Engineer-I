import React from 'react';
import ContactCard from '../Components/ContactCard'

class ContactContainer extends React.Component {

  state = {
    searchInput: ""
  }

  renderCards = () => {
    let { allContacts, handleUpdateContact, handleDeleteContact } = this.props;
    return allContacts.map((contactObj, index) => <ContactCard key={index} contact={contactObj} handleUpdateContact={handleUpdateContact} handleDeleteContact={handleDeleteContact} />)
  }

  renderFilteredCards = (e) => {
    this.setState({
      searchInput: e.target.value
    })
    let searchInput = e.target.value;
    let newArray = this.props.allContacts.filter(obj => {
      if(obj.name.toString().includes(searchInput) || obj.phone.toString().includes(searchInput) || obj.email.toString().includes(searchInput)) {
        return obj;
      }
    })
    console.log(newArray);
  }

  render() {
    let { searchInput } = this.state;
    return (
      <div className="contact-container">
        <div className="contact-container-header">Your Contacts:</div>
        <input type="text" placeholder=" Search Your Contacts" value={searchInput} onChange={this.renderFilteredCards}></input>
        {this.renderCards()}
      </div>
    )
  }
}

export default ContactContainer;
