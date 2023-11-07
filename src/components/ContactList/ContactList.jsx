import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

import { FaTrashAlt } from "react-icons/fa";
import {
    Container,
    List,
    ListItem,
    Button,
    ContainerButtons,
    ContainerContact,
    Contact,
    Number
} from './ContactList.styled'

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    console.log('contactsList', contacts)
    //const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();
    
//     const getVisibleName = contacts.filter(contact =>
//        contact.name.toLowerCase().includes(filter.toLowerCase()));
//    console.log('getVisibleName', getVisibleName)
    
 return <Container>
     {contacts.map(({ id, name, number }) => (
            <List key = {id}>
                <ListItem>
                    <ContainerContact>
                        <Contact>{name}: </Contact>
                        <Number>{number} </Number>
                    <ContainerButtons>
                        <Button type="button"
                        onClick={() => dispatch(deleteContacts(id))}>
                        <FaTrashAlt color="#808080" /></Button>
                    </ContainerButtons>
                    </ContainerContact>
                    
                    
                 </ListItem>
            </List>
        ))}
            
    </Container>
}


