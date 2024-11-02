const Employee = require('../models/employee');
const Employer = require('../models/employer');


const createEmployer = async (req, res) => {
    const {company_name, roles, email, password} = req.body;
    try{
        const newEmployer = new Employee({
            company_name: company_name,
            roles: roles,
            email: email,
            password: password
        })  

        newEmployer.save()

        res.Json({status: 200, data: newEmployer});
    }
    catch(error){
        res.status(500).json({ message: "Internal server error" });
        console.error(error);
    }
}


const createEmployee = async (req, res) => {
    const {first_name, last_name, email, password, company_id} = req.body;
    var userToken = null;
    const transporter = nodemailer.createTransport({
        host: 'kosichi.ca',
        port: 465,
        secure: true,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASS
        },
      });


    try{
        const newEmployee = new Employee({
            first_name: first_name,
            last_name: last_name,
            email: email,
            company_id: company_id
        })  

        newEmployee.save().then(
            savedEmployee => {
                userToken = savedEmployee._id;
            })
            .catch(error => {
                console.error(error);
            });;

        if (userToken != null) {
            // const userUrl = `https://rec.kosichi.ca/signup/${userToken}`;
            // TODO
            const userUrl = `https://localhost:3000/signup/${userToken}`;

            const mailOptions = {
                from: '"REC Kosichi" <rec@kosichi.ca>',
                to: email,
                subject: "REC Kosichi | New User Registration",
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

        res.Json({status: 200, data: newEmployer});
    }
    catch(error){
        res.status(500).json({ message: "Internal server error" });
        console.error(error);
    }
}

const promoteEmployees = async(req, res) =>{
    const {id, role} = req.body;
    try{
        const result = await Employee.findByIdAndUpdate(id, {role: role});
        if (!result) {
            return res.json({ status: 404, message: "No time cards found" });
        }
        res.json({status: 200, data: result})
    }catch(error){
        console.log(error)
        res.status(500)
    }
}
module.exports = {
    createEmployer,
    createEmployee,
    promoteEmployees
}