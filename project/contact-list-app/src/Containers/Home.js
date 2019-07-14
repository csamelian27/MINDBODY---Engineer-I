import React from 'react';
import ContactForm from '../Components/ContactForm'
import ContactContainer from './ContactContainer'

class Home extends React.Component {

  state = {
    allContacts: [],
    count: 0
  }

  handleAddContact = (contact) => {
    let { allContacts, count } = this.state;
    this.setState({
      allContacts: [...allContacts, contact],
      count: count+1
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
    let newContacts = allContacts.filter(contactObj => contactObj.index !== contact.index)
    this.setState({
      allContacts: newContacts
    })
  }

  render() {
    let { allContacts, count } = this.state;
    console.log(this.state);

    return(
      <div className="home">
        <ContactForm allContacts={allContacts} count={count} handleAddContact={this.handleAddContact} />
        <ContactContainer allContacts={allContacts} handleUpdateContact={this.handleUpdateContact} handleDeleteContact={this.handleDeleteContact} />
      </div>
    )
  }
}

export default Home;
