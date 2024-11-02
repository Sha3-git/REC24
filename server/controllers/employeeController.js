const nodemailer = require('nodemailer');
const Employee = require('../models/employee');

const getEmployeeById = async (req, res) => {
    const { id } = req.params; 
    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ status: 200, data: employee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


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
    getEmployeeById,
    registerEmployee,
}