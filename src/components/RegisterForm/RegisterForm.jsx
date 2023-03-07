import { Forma, Label, Button } from 'components/LoginForm/LoginForm.styled';
// import telephoneImg from '../../img/telephone.png';
import {
  Img,
  StyledLink,
  Title,
  Container,
  InputContainer,
  Name,
  Email,
  Password,
} from 'components/RegisterForm/RegisterForm.styled';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    };
  
  return (
    <div>
      <Forma onSubmit={handleSubmit}>
        <Img />
        <Title>Create account</Title>
        <Container>
          <p>Already have an account?</p>
          <StyledLink to="/login">LogIn</StyledLink>
        </Container>
        <Label>
          Name
          <input
            className="input__form-input"
            name="name"
            value={name}
            onChange={handleChange}
            type="name"
          />
          <span className="span__icon-container">
            <Name className="icon"/>
          </span>
        </Label>
        <InputContainer>
          <Label>
            Email
            <input
              className="input__form-input"
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
            />
            <span className="span__icon-container">
              <Email className="icon"/>
            </span>
          </Label>
        </InputContainer>
        <Label>
          Password
          <input
            className="input__form-input"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
          />
          <span className="span__icon-container">
            <Password className="icon"/>
          </span>
        </Label>
        <Button type="submit">SignUp</Button>
      </Forma>
    </div>
  );
};
