import { List, ListItem, Text, Delete } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(store => store.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  const filteredContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts.length === 0 ? (
        <p>
          Sorry, but you don't have any contacts yet. Add your first contact.
        </p>
      ) : (
        <List>
          {filteredContactsList.map(({ id, name, number }) => {
            return (
              <ListItem key={id}>
                <Text>
                  {name}: {number}
                </Text>
                <Delete
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Delete>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ContactList;
