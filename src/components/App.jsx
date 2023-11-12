
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage';


export const App = () => {
  const dispatch = useDispatch(); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => { 
    dispatch(fetchContacts());

  }, [dispatch]);

  return (<div>
     <h1>Phonebook</h1>
    <ContactForm />
    {error && (<ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>)}  
    <h2>Contacts</h2>
    <Filter />
    {isLoading && !error && <Loader />} 
    <ContactList />
  </div>
  );
};






