const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <div>
      <div className="contacts">
        <div className="contact-names">
          <div><p><strong>Name:</strong>{contact.name}</p></div>
          <div><p><strong>Email:</strong>{contact.email}</p></div>
          <div><p><strong>Phone:</strong>{contact.phone}</p></div>
          <div><p><strong>Group:</strong>{contact.group}</p></div>
        </div>
        <div className="contact-delete">
          <div>
            <button
              onClick={() => onEdit(contact)}
              className="edit"
            >
              Edit
            </button>
          </div>
          <div>
            <button
             onClick={() => onDelete(contact.id)} 
             className="delete"
             >
              Delete
              </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactItem;
