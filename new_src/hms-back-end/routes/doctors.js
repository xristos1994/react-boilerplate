//*
const express = require("express");
const router = express.Router();
const doctors = require("../controllers/doctors");

router.get("/", doctors.getDoctors);

module.exports = router;
//*/
