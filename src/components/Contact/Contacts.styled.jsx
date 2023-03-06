import styled from '@emotion/styled';
export const ContactsList = styled.ul`
  margin-left: 20px;
  margin-top: 25px;
  border: 1px solid blsck;
  list-style-type: none;
  padding-left: 20px
   width: 90%;

`;
export const ContactsItem = styled.li`
  text-align: end;
  margin-bottom: 8px;
  width: 100%;
  padding-bottom: 10px;
  margin: 0;
  height: 100%;
`;
export const Message = styled.p`
  color: white;
  font-size: 25px;
`;
export const MessageText = styled.p`
  display: inline-block;
  padding: 0 30px;
  float: left;
  font-size: 25px;
  text-align: left;
  color: #26b9ff;
  width: 100%;
  margin: 0;
`;
export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-right: auto;
  padding-top: 15px;
  justify-content: flex-end;
`;
export const Avatar = styled.div`
  min-width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
//   background: #26b9ff;
  background: ${getRandomHexColor};
  border-radius: 50%;
  border: 1px solid black;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Title = styled.p`
  text-align: center;
  width: 100%;
  padding: 10px;
  font-size: 32px;
  color: #26b9ff;
  font-weight: 400;
  margin-bottom: 50px;
`;
function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 176543  ).toString(16)}`;
return  '#' + (((1 + Math.random()) * (1 << 24)) | 0).toString(16).substr(-6);
}
