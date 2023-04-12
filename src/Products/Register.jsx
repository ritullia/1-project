import { useState } from "react";
import { Header } from "./Header";
import {
  RegisterContainer,
  MainTag,
  RegisterForm,
  FormInput,
} from "./styles/StyledRegister";

export const Register = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    alert(enteredName + " " + enteredLastName + " " + enteredEmail);
  };

  const handleInfoClick = (e) => {
    setEnteredName(e.target.value);
  };
  const handleLastNameClick = (e) => {
    setEnteredLastName(e.target.value);
  };
  const handleEmailClick = (e) => {
    setEnteredEmail(e.target.value);
  };

  return (
    <>
      <Header />
      <div>Welcome to our Registration page:</div>
      <RegisterContainer>
        <MainTag>Register Here</MainTag>
        <RegisterForm onSubmit={handleInfoSubmit}>
          <FormInput
            type="text"
            placeholder="First Name"
            onChange={handleInfoClick}
          />
          <FormInput
            type="text"
            placeholder="Last Name"
            onChange={handleLastNameClick}
          />
          <FormInput
            type="email"
            placeholder="Email Address"
            onChange={handleEmailClick}
          />
          <FormInput type="password" placeholder="Password:" />
          <FormInput type="password" placeholder="Re-enter Password" />
          <button className="btn btn-warning">Create Account</button>
        </RegisterForm>
      </RegisterContainer>
    </>
  );
};
