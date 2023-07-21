import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactsList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.find(option => option.name === contact.name)? alert(`${contact.name} is already in contacts`):
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

  };

  handleSubmitForm = data => {
    this.addContact(data);
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId) }))
    
  }
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)))
  };

  
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmitForm} />
        <h2>Contacts</h2>
        <Filter
          value={filter} 
          onChange={this.onChangeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
