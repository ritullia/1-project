import "./styles/style.css";
import styles from "./styles/NavBar.module.css";
import { StyledButton, StyledButtonBootstrap } from "./styles/StyledNavBar";
import Button from "react-bootstrap/Button";

export const NavBar = () => {
  const style = {
    marginTop: "200px",
    backgroundColor: "pink",
    padding: "20px",
  };
  return (
    <>
      <div style={style}>
        {/* inline metodas stiliaus kurimui */}
        <button className="btnOne">Click me One</button>
        <button className={styles.buttonClickTwo}>Click me</button>
        <button>Click me</button>
        <StyledButton>Click me Four</StyledButton>
        <Button variant="warning">Click me Five</Button>
        <StyledButtonBootstrap>Click me Six</StyledButtonBootstrap>
      </div>
    </>
  );
};
