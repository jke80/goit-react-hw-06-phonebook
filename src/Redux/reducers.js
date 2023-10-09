 import { combineReducers } from "redux";
import contactsSlice from "./contacts.slice";
import filterSlice from "./filter.slice";

// const TEST_CONTACTS = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];
  
//   const contactsInitialState = TEST_CONTACTS;
  

//   const contactsReducer = (state=contactsInitialState, action)=>{
//     switch(action.type) {
//         case 'contacts/addContact': {
//             return [...state, action.payload] ;
//           }
//           case 'contacts/deleteContact': {
//             return state.filter(contact=>contact.id!==action.payload);
//           }
//           default: 
//           return state;
//     }
//   };
//   const filterInitialState = '';

//   const filterReducer = (state=filterInitialState, action)=>{
//     switch(action.type) {
//         case 'filter/setFilter': {
//             return  action.payload;
//           }
//       default: 
//           return state;
//     }
//   };
  

   export const rootReducer = combineReducers({
    contacts: contactsSlice, 
     filter: filterSlice});