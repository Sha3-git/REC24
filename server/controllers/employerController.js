const Employee = require('../models/employee');

const createUser = async (req, res) => {
    const {first_name, last_name, email, password, company_id} = req.body;
    try{
        const newEmployer = new Employee({
            first_name: first_name,
            last_name: last_name,
            email: email,
            company_id: company_id
        })  
        newEmployer.save();
        res.Json({status: 200, data: newEmployer});
    }
    catch(error){
        res.status(500).json({ message: "Internal server error" });
        console.error(error);
    }
}