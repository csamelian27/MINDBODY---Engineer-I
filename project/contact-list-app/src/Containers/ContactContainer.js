import React from 'react';
import ContactCard from '../Components/ContactCard'

const ContactContainer = (props) => {

  const renderCards = () => {
    return props.allContacts.map((contactObj, index) => <ContactCard key={index} contact={contactObj} handleDeleteContact={props.handleDeleteContact} />)
  }

  console.log(props);
  return (
    <div className="contact-container">
      Contacts Container
      {renderCards()}
    </div>
  )
}

export default ContactContainer;
