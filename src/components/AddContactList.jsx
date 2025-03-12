import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const AddContactList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }


    // Dispatch action to Redux store
    dispatch(addContact({ id: Date.now(), name, email, phone }));

    // Navigate back to the contact list with the new contact
    navigate("/");

    // Clear the form
    setName("");
    setEmail("");
    setPhone("");
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

      <button type="submit" className="add-contact">
        Add
      </button>
    </form>
  );
};

export default AddContactList;
