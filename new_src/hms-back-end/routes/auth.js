const express = require("express");
const router  = express.Router();
const Auth    = require("../controllers/auth");

router.post("/resetPassword/:id", Auth.resetPassword);
router.post("/register", Auth.registerUser);
router.post("/login", Auth.logIn);
router.get("/confirm/:confirmation_string", Auth.confirm);

module.exports = router;
