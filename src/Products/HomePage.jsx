import styled from "styled-components";
import { Header } from "./Header";
export const HomePage = () => {
  const StyledHomePage = styled.h2`
    margin-top: 100px;
    margin-left: 200px;
  `;

  return (
    <>
      <Header></Header>
      <StyledHomePage>You are in Homepage</StyledHomePage>
    </>
  );
};
