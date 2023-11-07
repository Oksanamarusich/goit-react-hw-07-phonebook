import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://654a41e4e182221f8d52d46a.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async ( _, thunkAPI) => {
        try {
            const responce = await axios.get("/contacts");
            return responce.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс
            // який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    });
    
export const addContacts = createAsyncThunk("contacts/addContacts",
    async (name, thunkAPI) => {
        try {
            const responce = await axios.post("/contacts", { name });
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const deleteContacts = createAsyncThunk("contacts/deleteContacts",
    async (contactId, thunkAPI) => {
        try {
            const responce = await axios.delete(`contacts/:${contactId}`);
            return responce.data;
        } catch (e) {
           return thunkAPI.rejectWithValue(e.message); 
    }
})
        