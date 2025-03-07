// import { useState } from "react";


// export default function ContactItem({ contact }) {
//   const [searchTerm, setSearchTerm] = useState([])
//   // const [contacts, setContacts] = useState([])

//   // const handleSearch = (searchTerm) => {
//   //   console.log(searchTerm);
//   //   setSearchTerm(searchTerm);
//   // };
//   const [contacts, setContacts] = useState([]);
//   // const [newContact, setNewContact] = useState({ name: '', phone: '', group: '' });
//   // const [search, setSearch] = useState('');

//   const deleteContact = (id) => {
//     setContacts(contacts.filter((contact) => contact.id !== id));
//   };

//   const addContact = () => {
//     if (contact.name && contact.phone) {
//       setContacts([...contacts, { ...contact, id: Date.now() }]);
//       setContacts({ name: '', phone: '', email: '' });
//     }
//   };

//   const editContact = (id, updatedContact) => {
//     setContacts(contacts.map(c => (c.id === id ? updatedContact : c)));
//   };


//   const handleSearch = contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       contact.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );


//   return (
//     <div className="contain-result">
//       <span style={{ color: " #1774ee" }}>Contact List</span>
//       <div className="input">
//         <div onSubmit={handleSearch} className="add">
//           <input type="text"
//             placeholder="Search contact"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button onClick={addContact}>Add contact</button>
//         </div>
//         <div className="result">
//           <div><p>Name</p></div>
//           <div><p>Email</p></div>
//           <div><p>Phone</p></div>
//           <div><p>Actions</p></div>
//         </div>
//         <div className="contacts">
//           <div className="contact-names">
//             <div><p className="name">{contact.name}</p></div>
//             <div><p className="email">{contact.email}</p></div>
//             <div><p className="number">{contact.phone}</p></div>
//           </div>
//           <div className="contact-delete">
//             <div>
//               <button
//               onClick={editContact}
//                 className="edit"
//               >
//                 Edit
//               </button>
//             </div>
//             <div>
//               <button
//                 onClick={() => deleteContact(contact.id)}
//                 className="delete"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



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
