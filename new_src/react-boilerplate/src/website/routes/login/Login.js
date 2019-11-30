import React from "react";
import { Helmet } from "react-helmet-async";

import { LoginForm } from "components/main-content/components";

export const Login = () => {
  return (
    <>
      <Helmet>
        <title>My App | Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
