const express = require("express");
const router = express.Router();


const{
    getEmployeeById,
    registerEmployee,
} = require('../controllers/employeeController')

router.get('/getEmployeeById/:id', getEmployeeById)
router.put('/register', registerEmployee)

module.exports = router;