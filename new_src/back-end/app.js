//npm install -g nodemon
const express = require("express");
const app = express();
const cors = require("cors");
let middleware = require("./middleware");

const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const testRoute = require("./routes/test");

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/test", middleware.checkToken, testRoute);

module.exports = app;
