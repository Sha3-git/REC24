const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const Employee = require('../models/employee');
const Employer = require('../models/employer');

const getEmployerById = async (req, res) => {
    const { id } = req.params;
    try {
        const employer = await Employer.findById(id);
        if (!employer) {
            return res.status(404).json({ message: "Employer not found" });
        }
        res.status(200).json({ status: 200, data: employer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getEmployeesByEmployerId = async (req, res) => {
    console.log(req.params);
    const employerId = req.params;
    try {
        var employees = await Employee.find({ company_id: new mongoose.Types.ObjectId(employerId) }); 
        console.log(employees);
        if (!employees || employees.length === 0) {
            return res.status(404).json({ message: "No employees found" });
        }
        console.log(employees);
        res.status(200).json({ status: 200, data: employees });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const createEmployer = async (req, res) => {
    console.log("Creating Employer.")
    const {company_name, roles, email, password} = req.body;    const transporter = nodemailer.createTransport({
        host: 'kosichi.ca',
        port: 465,
        secure: true,
        auth: {
          user: "rec@kosichi.ca",
          pass: "Rec2024_"
        },
      });

    try{
        const existingEmployer = await Employer.findOne({ email });
        if (existingEmployer) {
            return res.status(400).json({ message: "An employer with this email already exists." });
        }

        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({ message: "An employee with this email already exists." });
        }

        console.log(roles);

        const newEmployer = new Employer({
            company_name: company_name,
            roles: roles,
            email: email,
            password: password
        })  

        await newEmployer.save()
        console.log("Employer saved successfully:", newEmployer);

        const mailOptions = {
            from: '"REC Kosichi" <rec@kosichi.ca>',
            to: email,
            subject: "REC Kosichi | New Employer Registration",
            html: `
            <p>Company Registered: ${company_name}</p> 
            `,
        };
        
        console.log("emailing");
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent:", info.response);
        } catch (error) {
            console.error("Error sending email:", error.message);
        }

        return res.status(200).json({ status: 200, data: newEmployer });
    }
    catch (error) {
        if (error.code === 11000) {
            console.error("Duplicate key error:", error.message);
            return res.status(400).json({ message: "An employer with this email already exists." });
        }

        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


const createEmployee = async (req, res) => {
    console.log("Creating Employee.")
    const {first_name, last_name, email, password, company_id} = req.body;

    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
        return res.json({ message: "An employee with this email already exists." });
    }

    const existingEmployer = await Employer.findOne({ email });
    if (existingEmployer) {
        return res.json({ message: "An employer with this email already exists." });
    }

    var userToken = null;
    const transporter = nodemailer.createTransport({
        host: 'kosichi.ca',
        port: 465,
        secure: true,
        auth: {
          user: "rec@kosichi.ca",
          pass: "Rec2024_"
        },
      });


    try{
        const newEmployee = new Employee({
            first_name: first_name,
            last_name: last_name,
            email: email,
            company_id: company_id
        })  

        console.log("Creating Employee V2.")
        await newEmployee.save().then(
            savedEmployee => {
                userToken = savedEmployee._id;
            })
            .catch(error => {
                console.error(error);
            });;

        if (userToken != null) {
            // const userUrl = `https://rec.kosichi.ca/signup/${userToken}`;
            // TODO
            const userUrl = `http://localhost:3000/signup/${userToken}`;

            const mailOptions = {
                from: '"REC Kosichi" <rec@kosichi.ca>',
                to: email,
                subject: "REC Kosichi | New Employee Registration",
                html: `
                <p>Please complete the user registration on the following:</p>
                <a href="${userUrl}">${userUrl}</a>
                `,
            };
            
            try {
                const info = await transporter.sendMail(mailOptions);
                console.log("Email sent:", info.response);
            } catch (error) {
                console.error("Error sending email:", error.message);
            }
        }

        res.json({status: 200, data: newEmployee});
    }
    catch(error){
        res.status(500).json({ message: "Internal server error" });
        console.error(error);
    }
}

const promoteEmployees = async(req, res) =>{
    console.log("Promoting Employee.")
    const {id, role} = req.body;
    try{
        const result = await Employee.findByIdAndUpdate(id, {role: role});
        if (!result) {
            return res.json({ status: 404, message: "No employees found" });
        }
        res.json({status: 200, data: result})
    }catch(error){
        console.log(error)
        res.status(500)
    }
}
module.exports = {
    getEmployerById,
    getEmployeesByEmployerId,
    createEmployer,
    createEmployee,
    promoteEmployees
}