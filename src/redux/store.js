import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { persistedContactsReducer } from 'redux/contactsSlise';
import { filterReducer } from 'redux/filterSlice';


export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware) {
            return getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            });  
        },
});


export const persistor = persistStore(store);


// import { createAction, createReducer } from '@reduxjs/toolkit';
// const addContacts = createAction('contacts/addContacts')

// const contactsReducer = createReducer([], {

//     [addContacts]:(state,action) => state+ action.payload,
// })