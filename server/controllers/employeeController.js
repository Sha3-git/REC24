const nodemailer = require('nodemailer');

const Employee = require('../models/employee');

const registerEmployee = async(req, res)=>{
    const {id, password} = req.body;
    try{
        const result = Employee.findByIdAndUpdate(id, {password: password});
        if (!result) {
            return res.json({ status: 404, message: "No employees found" });
        }
        res.json({status: 200, data: result})
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    registerEmployee,
}