//npm install -g nodemon
const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const bodyParser = require("body-parser");
const doctorsRoutes = require("./routes/doctors");
const testRoute = require("./routes/test");

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/test", testRoute);

module.exports = app;
