import { Header } from "./Header";
import { LoginContainer } from "./styles/StyledLogin";

export const Login = () => {
  return (
    <>
      <Header></Header>
      <LoginContainer>
        <div>
          <div>
            <h4>Login to Your account</h4>
            <p>Please enter Your e-mail and password to login</p>
          </div>
          <form>
            <input type="email" placeholder="Your e-mail" />
            <input type="password" placeholder="***********" required />
            <button className="btn btn-success">LOGIN</button>
          </form>
        </div>
      </LoginContainer>
    </>
  );
};
