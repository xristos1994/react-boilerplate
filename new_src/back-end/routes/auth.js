const express = require("express");
const router = express.Router();
const Auth = require("../controllers/auth");

router.post("/login", Auth.logIn);
router.post("/logout", Auth.logOut);

module.exports = router;
