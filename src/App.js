import React, { Component } from 'react';

//components
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

//styles
import './App.css';

//npm
// import shortid from 'shortid';
// import classNames from 'classnames';
// import { v4 as uuidv4 } from 'uuid';
// import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';

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

  //Local Storage

  componentDidMount() {
    const addedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(addedContacts);

    if (addedContacts !== null) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле contacts, записываю contact в хранилище');
      if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    }
  }

  submitHandler = newContact => {
    const { contacts } = this.state;
    const foundMatch = contacts.find(
      contact => contact.name === newContact.name,
    );
    if (foundMatch) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleFilterContacts = ({ currentTarget }) => {
    this.setState({ filter: currentTarget.value });
  };

  handleDeleteContact = currentId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== currentId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = this.state.filter.toLocaleLowerCase();
    const addedContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter),
    );
    return (
      <div className="container">
        <h1 className="phonebookHeader">Phonebook</h1>
        <ContactForm
          submitHandler={this.submitHandler}
          // onSubmit={this.formSubmitHandler}
          // contactName={name}
          // contactNumber={number}
          // onChangeName={this.handleNameChange}
          // onChangeNumber={this.handleNumberChange}
        />

        <h2 className="contactsHeader">Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterContacts} />
        <ContactList
          addedContacts={addedContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
