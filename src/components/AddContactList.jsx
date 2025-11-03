import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { toast } from "react-toastify";

const AddContactList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("");

  const contacts = useSelector((state) => state.contacts.contacts)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !group) {
      toast.error("Please fill all fields");
      return;
    }

    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.email.toLowerCase() === email.toLowerCase() ||
        contact.phone === phone
    )

    if (isDuplicate) {
      toast.error("Contact with the same name/email/phone already exist.")
      return
    }

    // Dispatch action to Redux store
    dispatch(addContact({ id: Date.now(), name, email, phone }));
     toast.success("Contact added")
    // Navigate back to the contact list with the new contact
    navigate("/");

    // Clear the form
    setName("");
    setEmail("");
    setPhone("");
    setGroup("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ color: "#1774ee" }}>Add Contact</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-text"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-text"
      />

      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="input-text"
      />

      <select value={group} onChange={(e) => setGroup(e.target.value)}>
        <option value="Family">Family</option>
        <option value="Friends">Friends</option>
        <option value="Work">Work</option>
      </select>

      <button type="submit" className="add-contact">
        Add
      </button>
    </form>
  );
};

export default AddContactList;
