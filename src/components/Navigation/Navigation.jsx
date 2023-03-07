import {
  Link,
  AuthNav,
} from 'components/SharedLayout/SharedLayout.styled';

export const Navigation = () => {
  return (
    <AuthNav>
      <Link to="/">SignUp</Link>
      <Link to="login">LogIn</Link>
    </AuthNav>
  );
};
