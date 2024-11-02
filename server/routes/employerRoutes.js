const express = require("express");
const router = express.Router();

const {createUser} = require("../controllers/employerController");

router.post('/create', createUser);

module.exports = router;