import React from 'react';
import ContactCard from '../Components/ContactCard'

class ContactContainer extends React.Component {

  state = {
    searchInput: "",
    filterContacts: []
  }

  renderCards = () => {
    let { allContacts, handleUpdateContact, handleDeleteContact } = this.props;
    let { searchInput, filterContacts } = this.state;
    if(!searchInput) {
      return allContacts.map((contactObj, index) => <ContactCard key={index} contact={contactObj} handleUpdateContact={handleUpdateContact} handleDeleteContact={handleDeleteContact} />)
    } else {
      return filterContacts.map((contactObj, index) => <ContactCard key={index} contact={contactObj} handleUpdateContact={handleUpdateContact} handleDeleteContact={handleDeleteContact} />)
    }
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
    this.setState({
      filterContacts: newArray
    })
  }

  render() {
    console.log(this.state);
    let { searchInput, filterContacts } = this.state;
    return (
      <div>
        <label> Search Your Contacts:
          <input type="text" placeholder=" Search Your Contacts" value={searchInput} onChange={this.renderFilteredCards}></input>
        </label>
        <div className="contact-container">
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

export default ContactContainer;
