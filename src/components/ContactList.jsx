import { useState } from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDeleteContact, onEditContact }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contain-result">
      <h2 style={{ color: "#1774ee" }} className="">Contact List</h2>
      <div className="input">
        <input
          type="text"
          placeholder="Search contact"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
            onEdit={onEditContact}
          />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
