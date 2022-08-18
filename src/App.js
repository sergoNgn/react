import { useState } from 'react'
import AddContact from './add-contact/AddContact';
import './App.scss';
import ContactList from './contact-list/ContacList';

function App() {

  const [contacts, setContacts] = useState([
    {
      id: '1',
      emoji: { emoji: '🙂' },
      name: 'Contact #1',
      phone: '0123-#1'
    },
    {
      id: '2',
      emoji: { emoji: '🙂' },
      name: 'Contact #2',
      phone: '0123-#2'
    },
    {
      id: '3',
      emoji: { emoji: '🙂' },
      name: 'Contact #3',
      phone: '0123-#3'
    },
    {
      id: '4',
      emoji: { emoji: '🙂' },
      name: 'Contact #4',
      phone: '0123-#4'
    },
    {
      id: '5',
      emoji: { emoji: '🙂' },
      name: 'Contact #5',
      phone: '0123-#5'
    },
  ]);

  const onAddContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }])
  }

  const onDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div className="app">
      <AddContact onAddContact={onAddContact} />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </div>
  );
}

export default App;
