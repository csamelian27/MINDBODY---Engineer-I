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

  render() {
    let { allContacts } = this.state

    return(
      <div>
      <ContactForm handleAddContact={this.handleAddContact} />
      <ContactContainer allContacts={allContacts} />
      </div>
    )
  }
}

export default Home;
