const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Allow all origins
app.use(cors());
// Allow specific origin(s)
app.use(cors({
  origin: 'https://yourdeployedsite.com'
}))

const EmployerRoutes = require('./routes/employerRoutes');

app.use('/api/employers', EmployerRoutes);