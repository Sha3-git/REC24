const express = require("express");
const router = express.Router();


const{
    getEmployeeById,
    registerEmployee,
    loginEmployee
} = require('../controllers/employeeController')

router.get('/getEmployeeById', getEmployeeById)
router.put('/register', registerEmployee)
router.post('/login', loginEmployee)

module.exports = router;