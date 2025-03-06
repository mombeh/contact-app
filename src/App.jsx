


import { useState } from "react";
import ContactForm from "./components/AddContactList";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Add a new contact
  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  // Delete a contact
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container">
      <h1 className="header">Contact Manager</h1>
    <div className="test-result">
    <ContactForm onAddContact={addContact} />
    <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </div>
    </div>
  );
};

export default App;
