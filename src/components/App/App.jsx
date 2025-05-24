import { useState, useEffect } from 'react'
import style from "./App.module.css"
import "modern-normalize";


import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';


function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  });
  
  
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const addNewContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    })

  }

  const deleteContacts = (contactsId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactsId);
   })
  }


  return (
    <div className={ style.container }>
      <h1>Phonebook</h1>
      <ContactForm addContact={ addNewContact } />
      <SearchBox
        value={filter}
        onChange={ setFilter } />
      <ContactList
        contactArray={filterContacts}
        onDelete={ deleteContacts } />
    </div>

  )
}

export default App
