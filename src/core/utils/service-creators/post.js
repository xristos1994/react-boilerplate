import { config } from "@core/configuration";

const post = ({ fullUrl = "", path = "", token = "", body }) => ({
  url: fullUrl !== "" ? fullUrl : config.baseUrl + path,
  method: "POST",
  headers: {
    //"X-Powered-By": "Express",
    //"Access-Control-Allow-Origin": "*",
    //"Content-Type": "application/json; charset=utf-8",
    //authorization: token === "" ? token : "Bearer " + token,
  },
  body,
});

export default post;
