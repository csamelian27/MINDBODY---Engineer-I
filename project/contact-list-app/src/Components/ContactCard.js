import React, {useState} from 'react';
import UpdateModal from './UpdateModal'

const ContactCard = (props) => {

  let [clicked, setClick] = useState(false);

  const handleClickUpdate = () => {
    setClick(clicked = !clicked);
  }

  return(
    <div className="contact-card">
      <span>{props.contact.name}</span>
      <span>{props.contact.phone}</span>
      <span>{props.contact.email}</span>
      <button onClick={handleClickUpdate}>Edit</button>
      <button onClick={() => props.handleDeleteContact(props.contact)}>Delete</button>
      { clicked ? <UpdateModal contact={props.contact} handleClickUpdate={handleClickUpdate} handleUpdateContact={props.handleUpdateContact} /> : null }
    </div>
  )
}

export default ContactCard;
