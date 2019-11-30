import { getToken } from "./../utils";

const baseUrl = "http://localhost:3000/";

//const testService = { url: `https://api.github.com/users` };

const post = ({ fullUrl = "", path = "", token = "", body }) => ({
  url: fullUrl !== "" ? fullUrl : baseUrl + path,
  method: "POST",
  headers: {
    "X-Powered-By": "Express",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
    authorization: token === "" ? token : "Bearer " + token
  },
  body
});

const login = ({ body }) => post({ path: "auth/login", body });

const logout = () =>
  post({ path: "auth/logout", body: { token: "" + getToken() } });

export { login, logout };
