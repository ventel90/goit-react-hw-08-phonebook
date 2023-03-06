import styled from '@emotion/styled';
import {
  MdOutlinePermContactCalendar,
  MdOutlinePhoneIphone,
} from 'react-icons/md';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  color: #26d7ff;
`;
export const Button = styled.button`
display:inline-block;
max-width: 61%;
height: 25px;
border-radius: 3px;
border: solid 1px black;
transition: all 300ms linear;
cursor: pointer;

  :hover {
     :hover {
    background-color: #26d7ff;
    color: white;
    border: solid 1px grey;
  }
`;
export const Input = styled.input`
  width: 59%;
  height: 25px;
margin-top: 10px;
margin-bottom: 15px;
    }
`;

export const Message = styled.p`
  display: inline-block;
  padding-right: 8px;
  float: left;
  font-size: 21px;
  text-align: left;
  color: black;
  width: 80%;
  margin: 0;
`;
export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  background-color: fwite;
  width: 350px;
  height: 50%;
  margin: 0 auto;
  margin-bottom: 0;
//   margin-top: 50px;
  padding: 25px;
  //   border: solid 1px grey;
  //   border-radius: 2.5px;
  //   box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  //
`;

    
export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  position: absolut;
  width: 30%;
  height: 100vh;
  margin-right: 0;
  padding-top: 50px;
  border-right: 1px solid black;
//   position: fixed;
`;

export const Name = styled(MdOutlinePermContactCalendar)`
  width: 20px;
  height: 20px;
`;

export const Phone = styled(MdOutlinePhoneIphone)`
  width: 20px;
  height: 20px;
`;
