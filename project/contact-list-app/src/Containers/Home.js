import React from 'react';
import ContactForm from '../Components/ContactForm'
import ContactContainer from './ContactContainer'

class Home extends React.Component {

  state = {
    allContacts: [],
    clickedRender: true
  }

  handleAddContact = (contact) => {
    let { allContacts } = this.state;
    if(contact.phone === "") {
      contact.phone = "~ No Phone # ~"
    }
    if(contact.email === "") {
      contact.email = "~ No Email ~"
    }
    this.setState({
      allContacts: [...allContacts, contact]
    })
  }

  handleUpdateContact = (contact) => {
    let { allContacts } = this.state;
    if(contact.name === "") contact.name = "Name Removed"
    else if(contact.phone === "") contact.phone = "~ No Phone # ~"
    else if(contact.email === "") contact.email = "~ No Email ~"

    let newArray = allContacts.map(contactObj => {
      if(contactObj.index === contact.index) {
        return contactObj = contact
      } else {
        return contactObj
      }
    })

    this.setState({
      allContacts: newArray
    })
  }

  handleDeleteContact = (contact) => {
    let { allContacts } = this.state;
    let newContacts = allContacts.filter(contactObj => contactObj.index !== contact.index)
    this.setState({
      allContacts: newContacts
    })
  }

  renderContactForm = () => {
    let { clickedRender } = this.state
    this.setState( {
      clickedRender: !clickedRender
    })
  }

  render() {
    let { allContacts, clickedRender } = this.state;
    console.log(allContacts);

    return(
      <div className="home">
        {clickedRender ? null : <button className="add-contact-button" onClick={this.renderContactForm}> Add Contact </button>}
        {clickedRender ? <ContactForm allContacts={allContacts} handleAddContact={this.handleAddContact} renderContactForm={this.renderContactForm}/> : null}

        <ContactContainer allContacts={allContacts} handleUpdateContact={this.handleUpdateContact} handleDeleteContact={this.handleDeleteContact} />
      </div>
    )
  }
}

export default Home;
