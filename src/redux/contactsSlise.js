import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    
 extraReducers: {
            [fetchContacts.pending](state) {
                state.isLoading = true;
             },
            [fetchContacts.fulfilled](state, action) {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
             },
            [fetchContacts.rejected](state, action) {
                state.isLoading = false;
                state.error = action.payload;
            },
            // [addContacts.pending](state, action) {
            //     state.isLoading = true;
            //  },
            // [addContacts.fulfilled](state, action) {
            //     state.isLoading = false;
            //     state.error = null;
            //     state.contacts = [...state.contacts, action.payload];
            //  },
            // [addContacts.rejected](state, action) {
            //     state.isLoading = false;
            //     state.error = action.payload;
            // },
            //  [deleteContacts.pending](state, action) {
            //     state.isLoading = true;
            //  },
            // [deleteContacts.fulfilled](state, action) {
            //     state.isLoading = false;
            //     state.error = null;
            //      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            //  },
            // [deleteContacts.rejected](state, action) {
            //     state.isLoading = false;
            //     state.error = action.payload;
            // },
        },
        
    });


export const contactsReducer = contactsSlice.reducer;
