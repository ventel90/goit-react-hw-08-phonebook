import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  MdOutlineContacts,
  MdOutlinePermContactCalendar,
  MdMail,
  MdPassword,
} from 'react-icons/md';


export const Img = styled(MdOutlineContacts)`
  display: block;
  margin: 0 auto;
  height: 65px;
  width: 75px;
  color: #26b9ff;
`;
export const Title = styled.p`
  text-align: center;
  width: 95%;
//   height:100%;
  padding: 10px;
  font-size: 32px;
  color: #26b9ff;
  font-weight: 400;
  margin: 0;
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 15px;
  color: #26b9ff;
  font-weight: 400;
  margin: 0;
`;
export const Container = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;`

export const Src = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  margin-right: 12px;
  color: red;
//   border: 2px dashed #2a2a2a;
//   border-radius: 8px;
//   fill: #2a2a2a;
//   color: black;
viewBox: 0 0 32 32
 position: absolute;
top: 50px;
left: 12px;
transform: translateY(50%)
`;
export const InputContainer = styled.span`
  position: relative;
   //   height: 100%;
  //   widtt: 100%;
  margin-bottom: 8px;
  margin: 0;
  &:focus {
    color: #0c86f7;
  }
`;
export const Input = styled.input`
  padding: 15px;
  width: 100%;
  max-height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  padding-left: 35px;
  display: flex;
  box-sizing: border-box;
  outline: none;
  color: #0c86f7;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
 
    &:focus {
      border: 1px solid #0c86f7;
    }
`;

export const Name = styled(MdOutlinePermContactCalendar)`
  width: 20px;
  height: 20px;
`;

export const Email = styled(MdMail)`
  width: 20px;
  height: 20px;
`;

export const Password = styled(MdPassword)`
  width: 20px;
  height: 20px;
`;