const express = require("express");
const router = express.Router();


const{
    registerEmployee,
} = require('../controllers/employeeController')

router.put('/register', registerEmployee)

module.exports = router;