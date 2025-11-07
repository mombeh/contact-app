import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts ? JSON.parse(savedContacts) : [];
};

const initialState = {
  contacts: loadFromLocalStorage(),
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const index = state.contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
