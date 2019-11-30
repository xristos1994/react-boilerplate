"use strict";
const randomstring = require("randomstring");
const pool = require("../dbconnection/dbconnection");
const executeQuery = require("../dbconnection/dbconnection");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "afro.niki.chris@gmail.com",
    pass: "apt_dev123"
  }
});

let mailOptions = {
  from: "afro.niki.chris@gmail.com", // sender address
  to: "", // list of receivers
  subject: "HMS confirmation", // Subject line
  html: ""
};

module.exports.registerUser = (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const birth_date = req.body.birth_date;
  const is_active = req.body.is_active;
  const role_id = req.body.role_id;
  const ref_id = req.body.ref_id;
  const com_id = req.body.com_id;
  const created = req.body.created;
  const created_by = req.body.created_by;
  const updated = req.body.updated;
  const updated_by = req.body.updated_by;
  randomstring.generate(1);
  const confirmation_string =
    new Date().getHours() +
    randomstring.generate(1) +
    new Date().getMinutes() +
    randomstring.generate(1) +
    new Date().getSeconds() +
    randomstring.generate(1) +
    new Date().getMilliseconds() +
    randomstring.generate(6);

  const query =
    "Insert Into HMS_USERS (EMAIL, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, PHONE, GENDER, ROLE_ID, CONFIRMATION_STRING) Values ('" +
    // "Insert Into HMS_USERS (EMAIL, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, PHONE, GENDER, BIRTH_DATE, ROLE_ID, CONFIRMATION_STRING) Values ('" +
    email +
    "','" +
    username +
    "',MD5('" +
    password +
    "'),'" +
    firstname +
    "','" +
    lastname +
    "','" +
    phone +
    "','" +
    gender +
    "'," +
    // birth_date +
    // "','" +
    role_id +
    ",'" +
    confirmation_string +
    "'); ";

  executeQuery(query, function(qResponse) {
    if (qResponse.mainStatus === 200) {
      let result = qResponse.queryResult;
      console.log("BBBB", result);
      if (result.affectedRows === 1) {
        mailOptions.html =
          '<h1>H M S </h1> <p>Για να ενεργοποιήσετε το λογαριασμό σας πατήστε <a href="http://localhost:3000/auth/confirm/' +
          confirmation_string +
          '">εδώ </a>';

        mailOptions.to = email;
        transporter.sendMail(mailOptions, function(err, info) {
          if (err) console.log(err);
          else console.log(info);
        });
      }
      res.status(200).json({
        status: 1,
        response: "Success - User was successfully registered!"
      });
    }
  });
};

module.exports.resetPassword = (req, res, next) => {
  const psw = req.body.newpassword;
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
      "update HMS_USERS set password = '" + psw + "' where id=?",
      [req.params.id],
      function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json({
          message: "Complete"
        });
      }
    );
    connection.release();
  });
};

module.exports.confirm = (req, res, next) => {
  let query =
    "update HMS_USERS set confirmation_string = 'ok' where confirmation_string='" +
    [req.params.confirmation_string] +
    "'";
  executeQuery(query, function(qResponse) {
    if (qResponse.mainStatus === 200) {
      if (qResponse.status === 1) {
        res.writeHead(301, {
          Location:
            "https://www.cimatti.it/wp-content/uploads/2013/08/form-success-message.jpg"
        });
        res.end();
      } else {
        res.writeHead(301, {
          Location: "http://localhost:3001/"
        });
        res.end();
      }
    }
  });
};

module.exports.logIn = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let query =
    "SELECT COUNT(*) as 'userExists' FROM HMS_USERS where confirmation_string='ok' and username = '" +
    username +
    "' AND password = MD5('" +
    password +
    "');";

  executeQuery(query, function(qResponse) {
    if (qResponse.mainStatus === 200) {
      let result = qResponse.queryResult;
      if (result[0].userExists === 1) {
        qResponse.status = 1;
        qResponse.response = "Successful log In";
      } else {
        qResponse.status = 0;
        qResponse.response = "Un-successful log In";
      }
    }
    res.status(qResponse.mainStatus).json({
      status: qResponse.status,
      response: qResponse.response
    });
  });
};
