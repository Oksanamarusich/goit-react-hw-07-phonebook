import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlise';

import { FaTrashAlt } from "react-icons/fa";
import {Container, List, ListItem, Button, ContainerButtons} from './ContactList.styled'

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();
    
    const getVisibleName = contacts.filter(contact =>
       contact.name.toLowerCase().includes(filter.toLowerCase()));
   
 return <Container>
        {getVisibleName.map(({ id, name, number }) => (
            <List key = {id}>
                <ListItem><p>{name}: {number}</p>
                    <ContainerButtons>
                        <Button type="button"
                        onClick={() => dispatch(deleteContacts(id))}>
                        <FaTrashAlt color="#808080" /></Button>
                    </ContainerButtons>
                    
                 </ListItem>
            </List>
        ))}
            
    </Container>
}


