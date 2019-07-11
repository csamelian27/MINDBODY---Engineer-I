import React from 'react';
import ContactCard from '../Components/ContactCard'

const ContactContainer = (props) => {

  const renderCards = () => {
    return props.allContacts.map(contactObj => <ContactCard contact={contactObj} />)
  }

  console.log(props);
  return (
    <div>
      Contacts Container
      {renderCards()}
    </div>
  )
}

export default ContactContainer;
