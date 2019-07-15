import React from 'react';
import ContactCard from '../Components/ContactCard'

class ContactContainer extends React.Component {

  state = {
    searchInput: "",
    filterContacts: []
  }

  renderCards = () => {
    let { allContacts } = this.props;
    let { searchInput, filterContacts } = this.state;
    if(!allContacts.length) return "**You currently have no contacts**"
    if(!searchInput) {
      return this.mapHelperFunction(allContacts)
    } else {
      if(!filterContacts.length) return "No Matching Contacts"
      return this.mapHelperFunction(filterContacts)
    }
  }

  mapHelperFunction = (arr) => {
    let { handleUpdateContact, handleDeleteContact } = this.props;
    return arr.map((contactObj, index) => <ContactCard key={index} contact={contactObj} handleUpdateContact={handleUpdateContact} handleDeleteContact={handleDeleteContact} />)
  }

  renderFilteredCards = (e) => {
    let searchInput = e.target.value.toLowerCase();
    let { allContacts } = this.props;
    let newArray = allContacts.filter(obj => {
      if(obj.name.toString().toLowerCase().includes(searchInput) || obj.phone.toString().toLowerCase().includes(searchInput) || obj.email.toString().toLowerCase().includes(searchInput)) {
        return obj;
      }
    })
    this.setState({
      searchInput: e.target.value,
      filterContacts: newArray
    })
  }

  render() {
    let { searchInput } = this.state;
    return (
      <div>
        <div className="search-bar">
          <label> Search Your Contacts:</label>
          <input type="text" placeholder="name, phone, email" value={searchInput} onChange={this.renderFilteredCards}></input>
        </div>
        <div className="contact-container">
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

export default ContactContainer;
