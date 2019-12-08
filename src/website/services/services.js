import { post, get } from "@core/utils/service-creators";

const testService1 = () => post({ fullUrl: `https://httpbin.org/delay/2` });

const testService = () => {
  return get({ fullUrl: `https://api.github.com/users` });
};

const successService = () => post({ fullUrl: `https://httpbin.org/delay/2` });

const failService = () => {
  return get({ fullUrl: `https://api.giasdthub.com/users` });
};

export { testService, testService1, successService, failService };
