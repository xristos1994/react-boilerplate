import { getToken } from "./../utils";
import { post } from "@core/utils/service-creators";

const login = ({ body }) => post({ path: "auth/login", body });

const logout = () =>
  post({ path: "auth/logout", body: { token: "" + getToken() } });

export { login, logout };
