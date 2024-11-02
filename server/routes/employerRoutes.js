const express = require("express");
const router = express.Router();

const {
    getEmployerById,
    getEmployeesByEmployerId,
    createEmployee,
    createEmployer,
    promoteEmployees
} = require("../controllers/employerController");

router.get('/getEmployerById/:id', getEmployerById)
router.get('/getEmployeesByEmployerId', getEmployeesByEmployerId)
router.post('/create', createEmployee);
router.post('/register', createEmployer);
router.put('/promote', promoteEmployees)

module.exports = router;