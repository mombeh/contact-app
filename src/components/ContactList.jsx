import { useState } from "react";
import ContactItem from "./ContactItem";
import Modal from "./Modal.jsx";

const ContactList = ({ contacts, onDelete, onEdit, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);


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

    const isDuplicate = contacts.some(
      (c) =>
        c.name.toLowerCase() === newContact.name.toLowerCase() ||
        c.email.toLowerCase() === newContact.email.toLowerCase() ||
        c.phone === newContact.phone
    );

    if (isDuplicate) {
      alert("A contact with the same name, email, or phone already exists.");
      return;
    }

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


  const openDeleteModal = (id) => {
    setContactToDelete(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(contactToDelete);
    setShowDeleteModal(false);
    setContactToDelete(null);
  };

  const handleEditContact = (e) => {
    e.preventDefault();

    onEdit(selectedId, { ...newContact, id: selectedId });
    setShowModal(false);

    setNewContact({
      name: "",
      email: "",
      phone: "",
      group: "Family",
    });

    setIsEditing(false);
  };

  const openEditModal = (contact) => {
    setIsEditing(true);
    setSelectedId(contact.id);
    setNewContact(contact);
    setShowModal(true);
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

        <button
          className="add-btn"
          onClick={() => {
            setIsEditing(false);
            setNewContact({
              name: "",
              email: "",
              phone: "",
              group: "Family",
            });
            setShowModal(true);
          }}
        >
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
                onDelete={() => openDeleteModal(contact.id)}
                onEdit={() => openEditModal(contact)}
              />
            ))}
          </div>
        ) : (
          <p className="no-result">No contacts found.</p>
        )}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} showClose={true}>
        <h3
          style={{
            padding: "20px",
            fontSize: "25px"
          }}
        >
          {isEditing ? "Edit Contact" : "Add Contact"}
        </h3>
        <form
          className="modal-form"
          onSubmit={isEditing ? handleEditContact : handleAddContact}
        >
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
            {isEditing ? "Update Contact" : "Save Contact"}
          </button>
        </form>
      </Modal>
      <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)} showClose={false}>
        <h3
          style={{
            padding: "15px",
            fontSize: "22px"
          }}
        >
          Are you sure you want to delete this contact?
        </h3>
        <div className="modal-btn-group">
          <button
            className="modal-delete-btn"
            onClick={handleConfirmDelete}
          >
            Yes, Delete
          </button>

          <button
            className="modal-cancel-btn"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactList;
