import { Label, Forma, FormContainer, Name, Phone } from './Form.styled';
import { useState } from 'react';
import {
  useAddContactsMutation,
  useGetContactsQuery,
} from 'redux/contacts/contacts-operation';

import {
  InputContainer,
  Title,
} from 'components/RegisterForm/RegisterForm.styled';
import { Button } from '../LoginForm/LoginForm.styled';

export function Form() {
  const [addContact] = useAddContactsMutation();
    const { data } = useGetContactsQuery();
   const handleSubmit = async e => {
    e.preventDefault();
    reset();
    const x =  await addContact({ name: name, number: number });
      console.log(x);
  };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    data.forEach(contact => {
      const { name, number } = contact;
      if (number === value) {
        alert(`${name} is already in contacts`);
        reset();
      }
    });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <Title>Create new contact</Title>
      <Forma onSubmit={handleSubmit}>
        <InputContainer>
          <Label>
            Name
            <input
              className="input__form-input"
              name="name"
              value={name}
              onChange={handleInputChange}
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <span className="span__icon-container">
              <Name className="icon"/>
            </span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            Number
            <input
              className="input__form-input"
              name="number"
              value={number}
              onChange={handleInputChange}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <span className="span__icon-container">
              <Phone className="icon"/>
            </span>
          </Label>
        </InputContainer>
        <Button type="submit">Add contact</Button>
      </Forma>
    </FormContainer>
  );
}
export default Form;
