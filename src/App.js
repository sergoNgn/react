import { useState, useEffect } from 'react'
import AddContact from './add-contact/AddContact';
import './App.scss';
import ContactList from './contact-list/ContacList';

function App() {

  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState();

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(localContacts || []);
  }, [])

  const updateContacts = (updatedContacts) => {
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  }

  const onAddContact = (contact) => {
    const contactIndex = contacts.findIndex(c => c.id === contact.id); // поиск индекса элемента
    if (contactIndex !== -1) { // если контакт есть в массиве тогда ->
      const updatedContacts = [...contacts]; // spread оператор для массивов [... array] и spread оператор для объектов {... object}
      updatedContacts.splice(contactIndex, 1, contact); // удалит старый контакт из массива и добавит вместо него обновленный контакт
      updateContacts(updatedContacts) // установка массива с обновленным контактом и сохранение в localStorage
    } else { // если контакта нет в массиве ->
      updateContacts([...contacts, { ...contact, id: contacts.length + 1 }]) // добавляет контакт в массив
    };
  }

  const onDeleteContact = (id) => {
    updateContacts(contacts.filter(contact => contact.id !== id));
  }

  const onEditContact = (id) => {
    const contactToEdit = contacts.find(contact => contact.id === id);
    setEditContact(contactToEdit);
  }

  return (
    <div className="app">
      <AddContact onAddContact={onAddContact} contact={editContact} />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} onEditContact={onEditContact} />
    </div>
  );
}

export default App;
