import styled from '@emotion/styled';
import { MdPersonSearch } from 'react-icons/md';

export const Filters = styled.form`
margin-left: 25px
`;
export const Input = styled.input`
  margin-top: 10px;
  margin-left: 25px;
  height: 25px;
  width: 50%;
`;
export const FineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 33%;
  height: 100%;
  margin-right: 30px;
  padding-top: 15px;
  justify-content: flex-end;
//   position: fixed;
`;

export const Search = styled(MdPersonSearch)`
  width: 20px;
  height: 20px;
`;
