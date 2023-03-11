import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import { Formik, Field } from 'formik';
import { loginSchema } from 'schemas/loginSchema';
import {
  FormContainer,
  Button,
  Label,
  Text,
  Email,
  Password,
} from './LoginForm.styled';
import { Container, Img, StyledLink, Title, ErrorMsg, IconHidden, IconShown, PassWrapper, ShowPassBtn } from 'components/RegisterForm/RegisterForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <Img />
          <Title>LOG IN</Title>
          <Text>Please enter your login and password</Text>
          <Label htmlFor="email">
            Email
            <Field
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.email && touched.email ? true : false}
              className="input__form-input"
            />
            <ErrorMsg name="email" component="span" />
            <span className="span__icon-container">
              <Email className="icon" />
            </span>
          </Label>

          <Label htmlFor="password">
            Password
            <Field
              type={passwordShown ? 'text' : 'password'}
              name="password"
              id="password"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.password && touched.password ? true : false}
              className="input__form-input"
            />
            <PassWrapper>
              <ShowPassBtn
                type="button"
                onClick={togglePassword}
                data-shown={passwordShown}
              >
                {passwordShown ? <IconShown /> : <IconHidden />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
            <span className="span__icon-container">
              <Password className="icon" />
            </span>
          </Label>
          <Button type="submit">LogIn</Button>
          <Container>
            <p>Don't have a profile?</p>
            <StyledLink to="/register">SignUp</StyledLink>
          </Container>
        </FormContainer>
      )}
    </Formik>
  );
};
