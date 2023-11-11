import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

import { FaTrashAlt } from "react-icons/fa";
import {
    Container,
    List,
    ListItem,
    Button,
    ContainerButtons,
    ContainerContact,
    Contact,
    PhoneNumber
} from './ContactList.styled'

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();
    
 return <Container>
     {contacts.map(({ id, name, number }) => (
            <List key = {id}>
                <ListItem>
                    <ContainerContact>
                        <Contact>{name}: </Contact>
                        <PhoneNumber>{number} </PhoneNumber>
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


