import React from 'react';

const ContactCard = (props) => {

  console.log(props);

  return(
    <div className="contact-card">
      I'm a Contact Card!
      {props.contact.name}
      {props.contact.phone}
      {props.contact.email}
      <button onClick={() => props.handleDeleteContact(props.contact)}>Delete Contact</button>
    </div>
  )
}

export default ContactCard;
