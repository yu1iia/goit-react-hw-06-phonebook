import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="phonebookHeader">Phonebook</h1>
      <ContactForm />
      <h2 className="contactsHeader">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
