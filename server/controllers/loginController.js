const Employee = require('../models/employee');
const Employer = require('../models/employer');

const login = async(req, res)=>{
    const {email, password} = req.body;
    console.log(typeof(email));
    try{
        const employee = Employee.findOne({email: email, password: password});
        const employer  = Employer.findOne({email: email, password: password});
        if (!employee[0] | !employer) {
            return res.json({ status: 404, message: "Login failed" });
        }
        result = employee? employee : employer? employer: null;
        res.json({status: 200, data: result})
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    login
};