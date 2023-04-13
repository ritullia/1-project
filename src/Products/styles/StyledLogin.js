import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 800px;
  /* background-color: #658492; */
`;

export const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 0 8px 8px;
  padding: 30px;
  gap: 5px;
  background-color: #658492;
`;
export const StyledInput = styled.input`
  width: 100%;
  margin: 10px 0px;
`;
export const StyledButton = styled.button`
  width: 100%;
  background-color: #ff8980;
  color: #ffff;
  outline: none;
`;
export const StyledHeader = styled.div`
  background-color: #99adb7;
  padding: 30px;
  color: #fff;
  border-radius: 8px 8px 0 0;
`;
