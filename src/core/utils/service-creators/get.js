import { config } from '@core/configuration';

const get = ({ fullUrl = '', path = '', token = '', body }) => ({
  url: fullUrl !== '' ? fullUrl : config.baseUrl + path,
  method: 'GET',
  headers: {
    //"X-Powered-By": "Express",
    //"Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json; charset=utf-8',
    //authorization: token === "" ? token : "Bearer " + token,
  },
});

export default get;
