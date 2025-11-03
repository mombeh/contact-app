import { useState } from "react";
import ContactItem from "./ContactItem";
import { useNavigate } from "react-router";
import { deleteContact } from "../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("All");

  // Mock data for testing before Redux connection
  const mockContacts = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", group: "Friends" },
    { id: 2, name: "Bob Smith", email: "bob@workmail.com", group: "Work" },
    { id: 3, name: "Clara Davis", email: "clara@family.com", group: "Family" },
    { id: 4, name: "David Miller", email: "david@gmail.com", group: "Friends" },
  ];

  const reduxContacts = useSelector((state) => state.contacts.contacts);
const contacts = reduxContacts && reduxContacts.length > 0 ? reduxContacts : mockContacts;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) => {
    const matchSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGroup = filterGroup === "All" || contact.group === filterGroup;
    return matchSearch && matchGroup;
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Contact?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1774ee",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteContact(id));
        toast.success("Contact deleted");
      }
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact List</h2>

      <div className="search-section">
        <input
          type="text"
          placeholder=" Search contact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <button className="add-btn" onClick={() => navigate("/add")}>
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
          filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={handleDelete}
              onEdit={() => navigate(`/edit/${contact.id}`)}
            />
          ))
        ) : (
          <p className="no-result">No contacts found.</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
