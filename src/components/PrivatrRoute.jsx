import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const PrivatRoute = ({ redirect = '/', children }) => {
    const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.getIsRefreshing);
    const shouldRedirect = !IsLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirect} /> : children;
};
