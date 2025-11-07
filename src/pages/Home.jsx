import { useState } from "react";
import ContactList from "../components/ContactList";

const Home = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "555-123-4567", group: "Friends" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", phone: "555-987-6543", group: "Work" },
    { id: 3, name: "Charlie Davis", email: "charlie.davis@example.com", phone: "555-456-7890", group: "Family" },
    { id: 4, name: "Diana Prince", email: "diana.prince@example.com", phone: "555-789-0123", group: "Friends" }
  ]);

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const editContact = (id, updatedContact) => {
    setContacts(
      contacts.map((c) => (c.id === id ? updatedContact : c))
    );
  };

  const handleAdd = (contact) => {
    setContacts([...contacts, contact]);
  };
  

  return (
    <div className="container">
      <h1 className="header">Contact Manager</h1>
      <div className="test-result">
        <ContactList
          contacts={contacts}
          onDelete={deleteContact}
          onEdit={editContact}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
};

export default Home;
