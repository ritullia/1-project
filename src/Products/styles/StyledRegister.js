import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 800px;
`;

export const MainTag = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #133337;
  margin-top: 20px;
  font-size: 20px;
  background-color: #99adb7;
  padding: 30px;
  border-radius: 8px 8px 0 0;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-top: 10px;
  line-height: 28px;
  flex-wrap: wrap;
  background-color: #658492;
  padding: 30px;
  border-radius: 0 0 8px 8px;
`;
export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  font-size: 10px;
  font-weight: 600;
  color: #658492;
  width: 100%;
  margin: 10px 0px;
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: #ff8980;
  color: #ffff;
  outline: none;
`;
