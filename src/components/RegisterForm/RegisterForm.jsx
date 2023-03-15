import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik, Field } from 'formik';
import { registerSchema } from 'schemas/registerSchema';
import {
  FormContainer,
  Label,
  Button,
} from 'components/LoginForm/LoginForm.styled';
import {
  Img,
  StyledLink,
  Title,
  Container,
  Name,
  Email,
  Password,
  ErrorMsg,
  IconHidden,
  IconShown,
  PassWrapper,
  ShowPassBtn,
} from 'components/RegisterForm/RegisterForm.styled';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.username,
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
      validationSchema={registerSchema}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <Img />
          <Title>Create account</Title>
          <Container>
            <p>Already have an account?</p>
            <StyledLink to="/login">LogIn</StyledLink>
          </Container>

          <Label htmlFor="username">
            Name
            <Field
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.username && touched.username ? true : false}
              className="input__form-input"
            />
            <ErrorMsg name="username" component="span" />
            <span className="span__icon-container">
              <Name className="icon" />
            </span>
          </Label>

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
          <Button type="submit">SignUp</Button>
        </FormContainer>
      )}
    </Formik>
  );
};
