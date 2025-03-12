import { useState } from "react";
import ContactItem from "./ContactItem";
import { useNavigate } from "react-router";
import { deleteContact } from "../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const contacts = useSelector((state) => state.contacts.contacts);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // Filter contacts based on search input
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="contain-result">
      <h2 style={{ color: "#1774ee" }} className="">
        Contact List
      </h2>
      <div className="input">
        <input
          type="text"
          placeholder="Search contact"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="add">
          <a onClick={() => navigate("/add")}>Add contact</a>
        </div>
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
        <p
          style={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "30px",
          }}
        >
          No contacts found.
        </p>
      )}
    </div>
  );
};

export default ContactList;
