import { validUsername, validPassword } from "./validators";

const loginFormContent = {
  title: "Log In",
  fields: [
    {
      component: "TextField",
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
      component: "TextField",
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
    {
      component: "Checkbox",
      name: "remember",
      props: {
        label: "Remember",
        position: "start",
      },
    },
  ],
};

export default loginFormContent;
