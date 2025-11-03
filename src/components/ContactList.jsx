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
  const contacts = useSelector((state) => state.contacts.contacts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) => {
    const matchSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGroup = filterGroup === "All" || contact.group === filterGroup;
    return matchSearch && matchGroup;
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete Contact?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1774ee',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteContact(id));
        toast.success("Contact deleted");
      }
    });
  };

  return (
    <div className="contain-result">
      <h2 style={{ color: "#1774ee" }}>Contact List</h2>

      <input
        type="text"
        placeholder="Search contact"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {["All", "Family", "Friends", "Work"].map((g) => (
          <button key={g} onClick={() => setFilterGroup(g)}>
            {g}
          </button>
        ))}
      </div>

      <div className="add">
        <a onClick={() => navigate("/add")}>Add contact</a>
      </div>

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
        <p style={{ textAlign: "center", marginTop: "50px", fontSize: "30px" }}>
          No contacts found.
        </p>
      )}
    </div>
  );
};

export default ContactList;
