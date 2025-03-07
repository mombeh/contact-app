// import { createSlice } from "@reduxjs/toolkit";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: [],
//   reducers: {
//     addContact: (state, action) => { state.push(action.payload); },
//     deleteContact: (state, action) => state.filter((c) => c.id !== action.payload),
//     editContact: (state, action) => {
//       const index = state.findIndex((c) => c.id === action.payload.id);
//       if (index !== -1) state[index] = action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, editContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
