import { Button } from 'components/Form/Form.styled';
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from 'redux/contacts/contacts-operation';
import {
  Title,
  Avatar,
  ContactContainer,
  ContactsItem,
  ContactsList,
  Container,
  Message,
  MessageText,
} from './Contacts.styled';

const Contact = ({ filter }) => {

  const { data = [] } = useGetContactsQuery();
  const [removeContact] = useDeleteContactsMutation();
  const normalizedFilter = filter.toLowerCase();
  const contacts = data.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  const handleDeleteContact = async id => {
    await removeContact(id);
    };
    
  return (
    <ContactContainer>
      {contacts.length > 0 ? (
        <ContactsList>
          <Title>CONTACTS</Title>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactsItem key={id}>
                <Container>
                  <Avatar>
                    <Message color="white"> {name[0]}</Message>
                  </Avatar>
                  <MessageText>{name}:</MessageText>
                  <MessageText>{number}</MessageText>
                  <Button onClick={() => handleDeleteContact(id)} type="button">
                    Delete
                  </Button>
                </Container>
              </ContactsItem>
            );
          })}
        </ContactsList>
      ) : (
        <Title>No contacts yet...</Title>
      )}
    </ContactContainer>
  );
};
export default Contact;
