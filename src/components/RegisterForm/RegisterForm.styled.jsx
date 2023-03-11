import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import {
  MdOutlineContacts,
  MdOutlinePermContactCalendar,
  MdMail,
  MdPassword,
} from 'react-icons/md';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

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
  align-items: center;
`;

export const Src = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  margin-right: 12px;
  color: red;
viewBox: 0 0 32 32
 position: absolute;
top: 50px;
left: 12px;
transform: translateY(50%)
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



 export const ErrorMsg = styled(ErrorMessage)`
   position: absolute;
   bottom: -10%;
   left: 0;

   transform: translateY(100%);

   font-size: 14px;
   color: #e34343;
 `;

export const PassWrapper = styled.div`
    top: -20px;
   position: relative;
   width: 100%;
 `;

 export const ShowPassBtn = styled.button`
   position: absolute;
   top: 50%;
   right: 15px;
   transform: translateY(-50%);
   color: #afb2b4;
   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   width: 33px;
   height: 33px;

   background-color: transparent;
   box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

   border: 1px solid rgba(255, 255, 255, 0.7);
   border-radius: 7px;

   cursor: pointer;

   &:hover > svg {
     fill: var(--accent);
 `;

 export const IconShown = styled(FaEye)`
   width: 100%;
   height: 100%;

   transition: fill 250ms ease-in-out;
 `;

 export const IconHidden = styled(FaEyeSlash)`
   width: 100%;
   height: 100%;


   transition: fill 250ms ease-in-out;
 `;