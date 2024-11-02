const Employee = require('../models/employee');

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
        const newEmployer = new Employee({
            first_name: first_name,
            last_name: last_name,
            email: email,
            company_id: company_id
        })  

        newEmployer.save().then(
            savedEmployer => {
                userToken = savedEmployer._id;
            })
            .catch(error => {
                console.error(error);
            });;

        if (userToken != null) {
            const userUrl = `https://rec.kosichi.ca/signup/${userToken}`;
    
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