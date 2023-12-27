import React, { useState } from "react";
import { SignInForm } from "../SignInForm/SignInForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const Auth = ({ close }) => {
  const [signUp, setSignUp] = useState(true);

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      {signUp ? (
        <SignInForm close={close} show={handleSignUp} />
      ) : (
        <RegisterForm close={close} show={handleSignUp} />
      )}
    </>
  );
};
