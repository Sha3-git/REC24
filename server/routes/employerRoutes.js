const express = require("express");
const router = express.Router();

const {createEmployee,
    createEmployer,
    promoteEmployees
} = require("../controllers/employerController");

router.post('/create', createEmployee);
router.post('/register', createEmployer);
router.put('/promote', promoteEmployees)

module.exports = router;