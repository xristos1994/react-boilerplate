import React from "react";
//import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { coreAuth_tryAuth, isLogged } from "@core/models/authentication/props";
import { withProps } from "@core/utils/props";
import { config, loginTypes } from "@core/configuration";

export const LoginWrapper = ({ coreAuth_tryAuth, isLogged }) => {
  // const responseGoogle = response => {
  //   console.log(response);
  // };

  const responseFacebook = response => {
    coreAuth_tryAuth({ ...response, authType: loginTypes.facebook });
  };

  return (
    <div>
      <h1>LOGIN</h1>
      {config.loginTypes.indexOf(loginTypes.facebook) !== -1 && (
        <FacebookLogin
          autoLoad={true}
          appId={config.facebookAppId}
          authType="reauthenticate"
          fields="name,email,picture"
          callback={responseFacebook}
        />
      )}
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
  coreAuth_tryAuth,
  isLogged
})(LoginWrapper);
