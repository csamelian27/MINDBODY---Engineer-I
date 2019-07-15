import React from 'react';
import ContactCard from '../Components/ContactCard'
import SearchBar from '../Components/SearchBar'

const ContactContainer = (props) => {

  const renderCards = () => {
    return props.allContacts.map((contactObj, index) => <ContactCard key={index} contact={contactObj} handleUpdateContact={props.handleUpdateContact} handleDeleteContact={props.handleDeleteContact} />)
  }

  const renderSearchCards = (searchInput) => {
    let newArray = props.allContacts.filter(contact => {
      console.log(Object.values(contact));
      if(Object.values(contact).includes(searchInput)) {
        return contact
      }
    })
    console.log(newArray);
  }

  console.log(props);
  return (
    <div className="contact-container">
      <div className="contact-container-header">Your Contacts:</div>
      <SearchBar renderSearchCards={renderSearchCards} />
      {renderCards()}
    </div>
  )
}

export default ContactContainer;
