const express = require("express");
const router = express.Router();

const {createUser,
    promoteEmployees
} = require("../controllers/employerController");

router.post('/create', createUser);
router.put('/promote', promoteEmployees)

module.exports = router;