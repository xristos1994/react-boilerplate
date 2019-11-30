"use strict";
const executeQuery = require("../dbconnection/dbconnection");
const rows = [
  {
    id: "username",
    numeric: false,
    disablePadding: true,
    label: "Username"
  },
  {
    id: "password",
    numeric: false,
    disablePadding: false,
    label: "Password"
  },
  {
    id: "firstname",
    numeric: false,
    disablePadding: false,
    label: "Firsname"
  },
  {
    id: "lastname",
    numeric: false,
    disablePadding: false,
    label: "Lastname"
  }
];
const filters = [true, false, true, false];

module.exports.getUsers = (req, res, next) => {
  let query =
    "SELECT id, username, password, firstname, lastname  FROM HMS_USERS;";

  executeQuery(query, function(qResponse) {
    let data = [];
    for (let i = 0; i < qResponse.queryResult.length; i++) {
      let x = qResponse.queryResult[i];
      data.push({
        id: x.id,
        username: x.username,
        password: x.password,
        firstname: x.firstname,
        lastname: x.lastname
      });
    }
    if (qResponse.mainStatus === 200) {
      qResponse.status = 1;
      //qResponse.response = "Successful log In";
    }
    res.status(qResponse.mainStatus).json({
      status: qResponse.status,
      response: { data: data, rows: rows, filters: filters }
      // response: qResponse.response
    });
  });
};
