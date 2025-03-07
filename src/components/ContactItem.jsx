const ContactItem = ({ contact, onDelete, onEdit }) => {
  return (
    <div>
      <div className="contacts">
        <div className="contact-names">
          <div> <p>{contact.name}</p></div>
          <div><p>{contact.email}</p></div>
          <div><p>{contact.phone}</p></div>
        </div>
        <div className="contact-delete">
          <div>
            <button
              onClick={() => {
                const newName = prompt("Edit Name", contact.name);
                if (newName) {
                  onEdit(contact.id, { ...contact, name: newName });
                }
              }}
              className="edit"
            >
              Edit
            </button>
          </div>
          <div>
            <button onClick={() => onDelete(contact.id)} className="delete">Delete</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactItem;
