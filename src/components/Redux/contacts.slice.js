import { createSlice, nanoid } from '@reduxjs/toolkit';

const TEST_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsInitialState = TEST_CONTACTS;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, {payload}) {
        state.push(payload);
      },
      prepare({ name, number }) {
        return {payload: { name, number, id: nanoid() }};
      },
    },
  deleteContact(state, { payload }) {
    return state.filter(contact => contact.id !== payload);
  },
},
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
