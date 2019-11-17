import React from "react";
import { Helmet } from "react-helmet-async";
import { LoginWrapper } from "@core/components";

export const Login = () => {
  return (
    <>
      <Helmet>
        <title>My App | Login</title>
      </Helmet>
      <LoginWrapper />
    </>
  );
};

export default Login;
