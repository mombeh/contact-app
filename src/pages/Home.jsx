
import { useState } from "react";
import ContactList from "../components/ContactList";

const Home =()=>{
  const [contacts, setContacts] = useState([
    { id: 1, name: " ", email: "", phone: " " },
    { id: 2, name: " ", email: " ", phone: " " },
    { id: 3, name: " ", email: " ", phone: " " },
    { id: 5, name: " ", email: " ", phone: " " },
  ]);
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (id, updatedContact) => {
    setContacts(contacts.filter((c) => (c.id === id ? updatedContact : c)));
  };


    return(
        <div className="container">
      <h1 className="header">Contact Manager</h1>
      <div className="test-result">
        <ContactList
          contacts={contacts}
          onDeleteContact={deleteContact}
          onEditContact={editContact}
        />
      </div>
    </div>
    )
}

export default Home