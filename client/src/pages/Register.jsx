import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

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
    <div className="mx-auto p-2">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label className="form-label">Company Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email address</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Positions List</label>
          <textarea
            className="form-control"
            placeholder="Enter company positions, separated by a comma"
            value={positionsList}
            onChange={(e) => setPositionsList(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit Company Information
        </button>
      </form>
    </div>
  );
}

export default Register;
