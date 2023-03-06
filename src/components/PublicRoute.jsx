import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const PublicRoute = ({ redirect = '/', children }) => {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return IsLoggedIn ? <Navigate to={redirect} /> : children;
};

