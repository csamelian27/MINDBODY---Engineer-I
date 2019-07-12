import React from 'react';
import ContactCard from '../Components/ContactCard'

const ContactContainer = (props) => {

  const renderCards = () => {
    return props.allContacts.map((contactObj, index) => <ContactCard key={index} contact={contactObj} handleUpdateContact={props.handleUpdateContact} handleDeleteContact={props.handleDeleteContact} />)
  }

  console.log(props);
  return (
    <div className="contact-container">
       {/*<h1> Your homies </h1> */}
      {renderCards()}
    </div>
  )
}

export default ContactContainer;
