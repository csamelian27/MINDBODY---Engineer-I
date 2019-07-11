import React from 'react';

const ContactCard = (props) => {

  console.log(props);

  return(
    <div>
      I'm a Contact Card!
      {props.contact.name}
      {props.contact.phone}
      {props.contact.email}
    </div>
  )
}

export default ContactCard;
