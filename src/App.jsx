
import { useState } from "react";
import AddContactList from "./components/AddContactList";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Smith", email: "alice@example.com", phone: "123-456-7890" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", phone: "987-654-3210" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "555-555-5555" },
    { id: 5, name: "Nadine Smith", email: "alice@example.com", phone: "123-456-7890" },
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (id, updatedContact) => {
    setContacts(contacts.map((c) => (c.id === id ? updatedContact : c)));
  };

  return (
    <div className="container">
      <h1 className="header">Contact Manager</h1>
      <div className="test-result">
        <AddContactList onAddContact={addContact} />
        <ContactList
          contacts={contacts}
          onDeleteContact={deleteContact}
          onEditContact={editContact}
        />
      </div>
    </div>
  );
}
