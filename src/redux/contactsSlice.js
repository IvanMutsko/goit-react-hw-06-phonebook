import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: '1a1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: '2a1', name: 'Hermione Kline', number: '443-89-12' },
    { id: '3a1', name: 'Eden Clements', number: '645-17-79' },
    { id: '4a1', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
