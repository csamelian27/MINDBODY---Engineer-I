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
        <ContactForm handleAddContact={this.handleAddContact} />
        <ContactContainer allContacts={allContacts} handleDeleteContact={this.handleDeleteContact} />
      </div>
    )
  }
}

export default Home;
