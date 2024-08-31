import { useState } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
// import contactsFromServer from '../contactsFromServer.json';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';

function App() {
  // contacts state + LS data saving ======================> Замінив на юсеСелектор
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('savedContacts'));
  //   return savedContacts || contactsFromServer;
  // });
  // useEffect(() => {
  //   localStorage.setItem('savedContacts', JSON.stringify(contacts));
  // }, [contacts]);

  const dispatch = useDispatch();
  const selectContacts = useSelector(state => {
    console.log(state);
    return state.contacts.contacts.items;
  });

  // Add new contact logic
  const onAddContact = newContact => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };

    // setContacts(prevContacts => [finalContact, ...prevContacts]);
    dispatch(addContact(finalContact));
  };

  // Delete contact logic
  const onDeleteContact = contactId => {
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== contactId)
    // );
    dispatch(deleteContact(contactId));
  };

  // control component: input from searchBox
  // const [filterValue, setFilterValue] = useState('');
  const changeFilter = useSelector(state => {
    console.log(state);
    return state.contacts.contacts.filters;
  });
  const handleFilter = event => {
    const value = event.target.value;
    setFilterValue(value);
  };

  // contacts filtration logic
  const filteredContacts = selectContacts.filter(contact =>
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
