const Employee = require('../models/employee');
const Employer = require('../models/employer');

const login = async(req, res)=>{
    const {email, password} = req.body;
    console.log(typeof(email));
    try {
        var employee = await Employee.findOne({ email: email, password: password });
        var employer = await Employer.findOne({ email: email, password: password });
    
        let user;
        if (employee) {
            const match = await bcrypt.compare(password, employee.password);
            if (match) {
                user = { userType: 'employee', data: employee };
            }
        } 
        if (employer) {
            const match = await bcrypt.compare(password, employer.password);
            if (match) {
                user = { userType: 'employer', data: employer };
            }
        }

        if (!user) {
            return res.status(404).json({ message: "Login failed" });
        }
        
        res.status(200).json(user);
    } catch (error) {
        return res.json({ status: 500, message: "Internal server error" });
    }
}

module.exports = {
    login
};