const testService = { url: `https://api.github.com/users` };
const testService1 = {
  url: "https://httpbin.org/delay/2",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "rxjs-custom-header": "Rxjs"
  },
  body: {
    rxjs: "Hello World!"
  }
};

export { testService, testService1 };
