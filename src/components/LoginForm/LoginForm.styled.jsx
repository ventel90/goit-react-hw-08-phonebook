import styled from '@emotion/styled';
import {
  MdMail,
  MdPassword,
} from 'react-icons/md';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  color: gray
  padding-top: 10px;
`;
export const Forma = styled.form`
 background-color: white;
  display: flex;
  flex-direction: column;
  background-color: fwite;
  width: 350px;
//   height: 100%;
  margin: 0 auto;
//   margin-bottom: auto;
  margin-top: 10%;
  padding: 35px;
  border: solid 1px grey;
  border-radius: 2.5px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
//    position: absolute;             
//    top: 50%;                        
//    transform: translate(0, -50%) } 
`;
export const Button = styled.button`
  display: inline-block;
  // max-width: 30%;
  width: 100%;
  height: 35px;
  color: white;
  border-radius: 2.5px;
  background: #26b9ff;
  margin-top: 45px;
  //   margin-bottom: 25px;
  border: solid 1px black;
  transition: all 300ms linear;
  cursor: pointer;
  font-size: 20px;
  :hover {
    background-color: #26d7ff;
    color: white;
    border: solid 1px grey;
  }
`;
export const Text = styled.p`
  text-align: center;
  width: 95%;
  padding: 20px;
  font-size: 18px;
//   color: #26b9ff;
//   font-weight: 400;
  margin: 0;
`;

export const Email = styled(MdMail)`
  width: 20px;
  height: 20px;
`;

export const Password = styled(MdPassword)`
  width: 20px;
  height: 20px;
`;