const express = require("express");
const router = express.Router();


const{
    registerEmployee,
    loginEmployee
} = require('../controllers/employeeController')

router.put('/register', registerEmployee)
router.post('/login', loginEmployee)

module.exports = router;