const ContactItem = ({ contact, onDelete, onEdit}) => (
    <div className="contain-result">
      <div>
        <p className="name">{contact.name}</p>
        <p className="email">{contact.email}</p>
        <p className="number">{contact.phone}</p>
      </div>
      <button
        onClick={() => onEdit(contact)}
        className="edit"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(contact.id)}
        className="delete"
      >
        Delete
      </button>
    </div>
  );
  
  export default ContactItem;
  