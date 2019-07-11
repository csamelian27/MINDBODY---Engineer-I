import React, {useState} from 'react';
import UpdateModal from './UpdateModal'

const ContactCard = (props) => {

  let [clicked, setClick] = useState(false);

  const handleClickUpdate = (contact) => {
    setClick(clicked = !clicked);
    props.handleUpdateContact(contact);
  }

  console.log(props);

  return(
    <div className="contact-card">
      I'm a Contact Card!
      {props.contact.name}
      {props.contact.phone}
      {props.contact.email}
      <button onClick={handleClickUpdate}>Edit</button>
      <button onClick={() => props.handleDeleteContact(props.contact)}>Delete</button>
      { clicked ? <UpdateModal contact={props.contact} handleClickUpdate={handleClickUpdate} /> : null }
    </div>
  )
}

export default ContactCard;
