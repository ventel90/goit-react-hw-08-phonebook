import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdOutlineContacts } from 'react-icons/md';

export const Header = styled.header`
  background-color: #282626;
  color: #26b9ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 30px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 58px;
  > nav {
    display: flex;
  }
`;

export const Logos = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #3d3b3b;
  font-weight: 500;
  &.active {
    color: white;
    background-color: #26b9ff;
  }
`;
export const Title = styled.p`
  width: 100%;
  font-size: 35px;
  text-align: center;
  color: #26b9ff;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
`;
export const StyledLink = styled(NavLink)`
  width: 100%;
  font-size: 35px;
  text-align: center;
  color: #26b9ff;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  text-decoration: none;
`;
export const Img = styled(MdOutlineContacts)`
  padding-right: 15px;
  height: 35px;
  width: 40px;
  position: relative;
  bottom: -5px;
`;
export const AuthNav = styled.nav`
  display: flex;
`;
export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  width: 81%;
`;

export const Button = styled.button`
  width: 110px;
  padding: 8px ;
  border-radius: 4px;
  text-decoration: none;
  /* color: white; */
  font-weight: 500;
  font-size: 15px;
  border: 1px solid grey;
  margin-left: 15px;

  :hover {
    color: white;
    background-color: #26b9ff;
  }
`;
export const UserName = styled.p`
  width: 100%;
  font-size: 25px;
  text-align: center;
  color: #26b9ff;
  font-weight: bold;
  text-align: right;
  margin-left: 10px;
`;
export const UserMenuContacts = styled.div`
  display: flex;
  justify-content: flex-start;
`;