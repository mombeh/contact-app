import { useState } from "react";
import ContactItem from "./ContactItem";
import Modal from "./Modal.jsx";

const ContactList = ({ contacts, onDelete, onEdit, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    group: "Family",
  });
  

  const filteredContacts = contacts.filter((contact) => {
    const matchSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchGroup =
      filterGroup === "All" || contact.group === filterGroup;

    return matchSearch && matchGroup;
  });

  const handleAddContact = (e) => {
    e.preventDefault();

    if (!newContact.name || !newContact.email || !newContact.phone) return;

    const contactToAdd = {
      ...newContact,
      id: Date.now(),
    };

    onAdd(contactToAdd);
    setShowModal(false);

    setNewContact({
      name: "",
      email: "",
      phone: "",
      group: "Family",
    });
  };



  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact List</h2>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search contact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add
        </button>

      </div>

      <div className="filter-buttons">
        {["All", "Family", "Friends", "Work"].map((g) => (
          <button
            key={g}
            onClick={() => setFilterGroup(g)}
            className={`filter-btn ${filterGroup === g ? "active" : ""}`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="contact-list">
        {filteredContacts.length > 0 ? (
          <div className="contact-grid">
            {filteredContacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDelete={() => onDelete(contact.id)}
                onEdit={() => onEdit(contact.id, contact)}
              />
            ))}
          </div>
        ) : (
          <p className="no-result">No contacts found.</p>
        )}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h3 style={{ padding: "20px", fontSize: "25px" }}>Add Contact</h3>

        <form className="modal-form" onSubmit={handleAddContact}>
          <input
            type="text"
            placeholder="Name"
            value={newContact.name}
            onChange={(e) =>
              setNewContact({ ...newContact, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={newContact.email}
            onChange={(e) =>
              setNewContact({ ...newContact, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Phone"
            value={newContact.phone}
            onChange={(e) =>
              setNewContact({ ...newContact, phone: e.target.value })
            }
          />

          <select
            value={newContact.group}
            onChange={(e) =>
              setNewContact({ ...newContact, group: e.target.value })
            }
          >
            <option>Family</option>
            <option>Friends</option>
            <option>Work</option>
          </select>

          <button className="add-btn" type="submit">
            Save Contact
          </button>
        </form>

      </Modal>
    </div>
  );
};

export default ContactList;
