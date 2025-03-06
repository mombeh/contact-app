

import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onDeleteContact, onEditContact }) {

  return (
    <div>
      <span className="list">Contact List</span>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
          onEdit={onEditContact}
        />
      ))}
    </div>
  );
};

