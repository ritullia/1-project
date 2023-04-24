import { useState } from "react";

import {
  RegisterContainer,
  MainTag,
  RegisterForm,
  FormInput,
  StyledButton,
} from "./styles/StyledRegister";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    alert(
      `${formData.name} ${formData.lastname} registered with: ${formData.email}`
    );
  };

  const handleOnChange = (e) => {
    // console.log("e.target.value", e.target.value);
    // console.log("e.target.name", e.target.name);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <RegisterContainer>
        <MainTag>
          <h2>Register Here</h2>
          <p>Please fill in registration:</p>
        </MainTag>

        <RegisterForm onSubmit={handleInfoSubmit}>
          <FormInput
            type="text"
            name="name" // name turi buti unique
            placeholder="First Name"
            onChange={handleOnChange}
          />
          <FormInput
            name="lastname"
            type="text"
            placeholder="Last Name"
            onChange={handleOnChange}
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleOnChange}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password:"
            onChange={handleOnChange}
          />
          <FormInput type="password" placeholder="Re-enter Password" />
          <StyledButton className="btn">Create Account</StyledButton>
        </RegisterForm>
      </RegisterContainer>
    </>
  );
};
