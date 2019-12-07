import { validUsername, validPassword } from "./validators";
import { CustomTextField } from "@core/components/formContent/components";

const loginFormContent = {
  title: "Log In",
  fields: [
    {
      component: CustomTextField,
      name: "username",
      validate: validUsername,
      props: {
        label: "Username",
        type: "text",
        autoComplete: "current-username",
        margin: "normal",
        required: false,
      },
    },
    {
      component: CustomTextField,
      name: "password",
      validate: validPassword,
      props: {
        label: "Password",
        type: "password",
        autoComplete: "current-password",
        margin: "normal",
        required: false,
      },
    },
  ],
};

export default loginFormContent;
