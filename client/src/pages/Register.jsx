import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"

function Register() {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [positionsList, setPositionsList] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roles = positionsList.split(',').map(role => role.trim());

    try {
        const response = await fetch('/api/employers/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company_name: companyName,
                roles,
                email,
                password
            }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Employer created successfully!");
            navigate("/login");
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

  return (
    <div className="mx-auto p-2" >
      <form class="row g-3">
        <div className="col-12"  >
          <div class="form-label">Company Name</div>
          <input class="form-control" type="companyName" placeholder="Enter comapny name" />

        </div>
        <div className="col-md-6"  >
          <div class="form-label">Email address</div>
          <input class="form-control" type="email" placeholder="Enter email" />

        </div>
        <div className="col-md-6" controlId="formBasicPassword">
          <div class="form-label">Password</div>
          <input class="form-control" type="password" placeholder="Password" />
        </div>
        <div className="col-12"  >
          <div class="form-label">Positions List</div>
          <textarea class="form-control" type="positionsList" placeholder="Enter company positions, separated by a comma"></textarea>

        </div>
        <button type="submit" class="btn btn-primary mb-3">Submit Company Information</button>
      </form>
    </div>
  )
}

export default Register