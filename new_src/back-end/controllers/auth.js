"use strict";
let jwt = require("jsonwebtoken");
let config = require("./../config");

module.exports.logIn = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let clientToken = req.body.token;
  // For the given username fetch user from DB
  let mockedUsername = "admin";
  let mockedPassword = "password";
  let mockedToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTc0NzgxNDY5LCJleHAiOjE1NzQ4Njc4Njl9.jEhU67ptlLWsQLuJTFB9O_mjFFMVrvnDsGEA9gMkIOQ";
  if ((username && password) || clientToken) {
    if (
      (username === mockedUsername && password === mockedPassword) ||
      clientToken === mockedToken
    ) {
      let token = jwt.sign({ username: username }, config.secret, {
        expiresIn: "24h", // expires in 24 hours
      });
      // return the JWT token for the future API calls
      res.json({
        message: "Authentication successful!",
        account: {
          username: mockedUsername,
          roles: ["Role 1"],
          isLogged: true,
          token: token,
        },
      });
    } else {
      res.send(403).json({
        account: { isLogged: false },
        message: "Incorrect username or password",
      });
    }
  } else {
    res.send(400).json({
      success: false,
      message: "Authentication failed! Please check the request",
    });
  }
};

module.exports.logOut = (req, res, next) => {
  let clientToken = req.body.token;
  res.json({
    success: true,
    message: "User Logged Out.",
    deletedToken: clientToken,
  });
};
