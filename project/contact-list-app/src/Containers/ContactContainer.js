import React from 'react';
import ContactCard from '../Components/ContactCard'
import SearchBar from '../Components/SearchBar'

const ContactContainer = (props) => {

  const renderCards = () => {
    return props.allContacts.map((contactObj, index) => <ContactCard key={index} contact={contactObj} handleUpdateContact={props.handleUpdateContact} handleDeleteContact={props.handleDeleteContact} />)
  }

  console.log(props);
  return (
    <div className="contact-container">
      <div className="contact-container-header">Your Contacts:</div>
      {renderCards()}
    </div>
  )
}

export default ContactContainer;
