import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://654a41e4e182221f8d52d46a.mockapi.io/contacts';


export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async ( _, thunkAPI) => {
        try {
            const responce = await axios.get("/contacts");
            return responce.data;
           
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
        
    });
    
    
export const addContacts = createAsyncThunk("contacts/addContacts",
    async (newContact, thunkAPI) => {
        try {
            const responce = await axios.post("/contacts", newContact);
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const deleteContacts = createAsyncThunk("contacts/deleteContacts",
    async (id, thunkAPI) => {
        try {
            const responce = await axios.delete(`contacts/${id}`);
            return responce.data;
        } catch (e) {
           return thunkAPI.rejectWithValue(e.message); 
    }
})
        