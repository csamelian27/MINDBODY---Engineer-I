import React from 'react';
import ContactForm from '../Components/ContactForm'
import ContactContainer from './ContactContainer'

class Home extends React.Component {

  state = {
    allContacts: []
  }

  handleAddContact = (contact) => {
    let { allContacts } = this.state;
    this.setState({
      allContacts: [...allContacts, contact]
    })
  }

  handleUpdateContact = (contact) => {
    let { allContacts } = this.state;
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
    let newContacts = allContacts.filter(contactObj => contactObj.email !== contact.email)
    this.setState({
      allContacts: newContacts
    })
  }

  render() {
    let { allContacts } = this.state;
    console.log(allContacts);

    return(
      <div className="home">
        <ContactForm allContacts={allContacts} handleAddContact={this.handleAddContact} />
        <ContactContainer allContacts={allContacts} handleUpdateContact={this.handleUpdateContact} handleDeleteContact={this.handleDeleteContact} />
      </div>
    )
  }
}

export default Home;
