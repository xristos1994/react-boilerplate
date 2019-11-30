const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  connectTimeout: 100000,
  host: "localhost", //"db4free.net",
  user: "apt_dev",
  password: "apt_dev123",
  database: "apt_dev",
  multipleStatements: true
});
module.exports = pool;

const executeQuery = (query, callback) => {
  pool.getConnection(function(err, connection) {
    if (err) {
      callback({
        mainStatus: 500,
        status: 0,
        response: "Database connection failed",
        queryResult: ""
      });
    } else {
      connection.query(query, function(err, result, fields) {
        if (err) {
          callback({
            mainStatus: 500,
            status: 0,
            response: "Database query failed",
            queryResult: ""
          });
        } else {
          callback({
            mainStatus: 200,
            status: "",
            response: "",
            queryResult: result
          });
        }
      });
      connection.release();
    }
  });
};

module.exports = executeQuery;
