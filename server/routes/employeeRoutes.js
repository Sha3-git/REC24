const express = require("express");
const router = express.Router();


const{
    registerEmployee,
    loginEmployee
} = require('../controllers/employeeController')