
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch(); 
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => { 
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<div>
    
     <h1>Phonebook</h1>
    <ContactForm />
      
    <h2>Contacts</h2>
    <Filter />
     {isLoading && !error && <b>Request in progress...</b>} 
    <ContactList />
  </div>
  );
};






