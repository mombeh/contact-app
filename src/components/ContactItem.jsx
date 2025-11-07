const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="contact-card">
      <div className="contact-details">
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Group:</strong> {contact.group}</p>
      </div>
      <div className="contact-actions">
        <button onClick={() => onEdit(contact)} className="edit">Edit</button>
        <button onClick={() => onDelete(contact.id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
