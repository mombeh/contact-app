
import { useState } from "react";
import AddContactList from "../components/AddContactList";

const Result = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="container">
      <h1 className="header">Contact Manager</h1>
      <div className="test-result">
        <AddContactList onAddContact={addContact} />
      </div>
    </div>
  )
}

export default Result