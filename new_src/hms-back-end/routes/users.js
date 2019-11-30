const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");

// router.post("/resetPassword/:id", Auth.resetPassword);
// router.post("/register", Auth.registerUser);
// router.post("/login", Auth.logIn);
// router.get("/confirm/:confirmation_string", Auth.confirm);

router.get("/", Users.getUsers);

module.exports = router;
