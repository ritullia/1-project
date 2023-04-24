import { Link, useNavigate } from "react-router-dom";
import {
  LoginContainer,
  FormStyle,
  StyledInput,
  StyledButton,
  StyledHeader,
} from "./styles/StyledLogin";

export const Login = () => {
  const navigate = useNavigate();

  const handleOnSubmit = () => {
    navigate("/products");
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Back to Home page</button>
      <LoginContainer>
        <div>
          <StyledHeader>
            <h4>Login to Your account</h4>
            <p>Please enter Your e-mail and password to login</p>
          </StyledHeader>
          <FormStyle onSubmit={handleOnSubmit}>
            <StyledInput type="email" placeholder="Your e-mail" />
            <StyledInput type="password" placeholder="***********" required />
            <StyledButton className="btn">LOGIN</StyledButton>
          </FormStyle>
          <p>
            Don't have an account yet?{" "}
            <Link to={"/register"}>Register Here</Link>
          </p>
        </div>
      </LoginContainer>
    </>
  );
};
