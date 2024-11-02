const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  company_name: String,
  roles: [{
    type: String
  }],
  email: String,
  password: String,
});

const employer = new mongoose.model("employer", employerSchema);

module.exports = employer;
