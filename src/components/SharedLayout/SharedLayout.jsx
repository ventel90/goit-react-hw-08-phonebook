import { Outlet } from 'react-router-dom';
import { Header } from './SharedLayout.styled';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { UsersMenu } from 'components/UsersMenu/UsersMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Header>
        <Logo />
        {!isLoggedIn ? <Navigation /> : <UsersMenu />}
      </Header>
      <Outlet />
    </>
  );
};
