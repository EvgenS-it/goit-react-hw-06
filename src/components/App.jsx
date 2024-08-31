import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactsFromServer from '../contacts.json';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('savedContacts'));
    return savedContacts || contactsFromServer;
  });

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  // Add new contact logic
  const onAddContact = newContact => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts(prevContacts => [finalContact, ...prevContacts]);
  };

  // Delete contact logic
  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  // control component: input from searchBox
  const [filterValue, setfilterValue] = useState('');
  const handleFilter = event => {
    const value = event.target.value;
    setfilterValue(value);
  };

  // contacts filtration logic
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
