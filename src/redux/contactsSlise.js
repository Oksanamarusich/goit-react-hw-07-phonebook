import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const handelPending = state => {
    state.isLoading = true
};

const handelFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.contacts = action.payload;
};

const handelRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, handelPending)
            .addCase(fetchContacts.fulfilled, handelFulfilled)
            .addCase(fetchContacts.rejected, handelRejected)
            .addCase(addContacts.pending, handelPending)
            .addCase(addContacts.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.error = null;
                state.contacts = [...state.contacts, action.payload];})
            .addCase(addContacts.rejected, handelRejected)
            .addCase(deleteContacts.pending, handelPending)
            .addCase(deleteContacts.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.error = null;
                 state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
             })
            .addCase(deleteContacts.rejected, handelRejected)
        //.addMatcher(isAnyOf([fetchContacts.pending, addContacts.pending, deleteContacts.pending]), handelPending)
    },
});
    



export const contactsReducer = contactsSlice.reducer;
