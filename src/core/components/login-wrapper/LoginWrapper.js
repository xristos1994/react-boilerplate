import React from "react";
//import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { coreAuth_tryAuth } from "@core/models/authentication/props";
import { withProps } from "@core/utils/props";

export const LoginWrapper = ({ coreAuth_tryAuth }) => {
  // const responseGoogle = response => {
  //   console.log(response);
  // };

  const responseFacebook = response => {
    console.log(response);
    coreAuth_tryAuth(response);
  };

  return (
    <div>
      <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>
      <FacebookLogin
        appId="720637721748358"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />

      {/*<GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />*/}
    </div>
  );
};

export default withProps({
  coreAuth_tryAuth
})(LoginWrapper);
