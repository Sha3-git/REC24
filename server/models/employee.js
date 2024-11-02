const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  company_id: mongoose.Schema.Types.ObjectId
});

const employee = new mongoose.model("employee", employeeSchema);

module.exports = employee;
