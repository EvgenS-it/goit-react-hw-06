// import { createSlice } from '@reduxjs/toolkit';
// createSlice();

import contactsFromServer from '../contactsFromServer.json';

const INITIAL_STATE = {
  contacts: {
    items: [...contactsFromServer],
  },
  filters: {
    name: '',
  },
};

// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         items: [...state.contacts.items, action.payload],
//       };
//     }

//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         items: state.contacts.items.filter(contact => contact.id !== action.payload),
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const addContact = payload => {
//   return {
//     type: 'contacts/addContact',
//     payload,
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
        filters: {
          name: state.filters.name,
        },
      };
    }

    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
        filters: {
          name: state.filters.name,
        },
      };
    }

    default:
      return state;
  }
};

// action
export const addContact = payload => {
  return {
    type: 'contacts/addContact',
    payload,
  };
};

// action
export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};
