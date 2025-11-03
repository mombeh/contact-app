import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../redux/contactsSlice";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.contacts.contacts);

  // Find the contact to edit
  const contactToEdit = contacts.find((contact) => contact.id === parseInt(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setEmail(contactToEdit.email);
      setPhone(contactToEdit.phone);
      setGroup(contactToEdit.group || "");
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      toast.error("Please fill all fields");
      return;
    }

    // Dispatch edit action
    dispatch(
      editContact({
        id: parseInt(id),
        updatedContact: { id: parseInt(id), name, email, phone },
      })
    );
    toast.success("Contact updated")
    navigate("/");
  };

  if (!contactToEdit) return <p>Contact not found!</p>;

  return (
    <form onSubmit={handleSubmit} className="edit-contact">
      <h2 style={{ color: "#1774ee" }}>Edit Contact</h2>

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


      <button type="submit" className="add-contact">Save Changes</button>
    </form>
  );
};

export default EditContact;
