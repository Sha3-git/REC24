const Employee = require('../models/employee');
const Employer = require('../models/employer');

const login = async(req, res)=>{
    const {email, password} = req.body;
    console.log(typeof(email));
    try {
        var employee = await Employee.findOne({ email: email, password: password });
        var employer = await Employer.findOne({ email: email, password: password });
    
        if (!employee && !employer) {
            return res.json({ status: 404, message: "Login failed" });
        }
    
        var result = employee ? employee : employer;
    
        res.json({ status: 200, data: result });
    } catch (error) {
        return res.json({ status: 500, message: "Internal server error" });
    }
}

module.exports = {
    login
};