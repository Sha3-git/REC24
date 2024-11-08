import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [positionsList, setPositionsList] = useState('');


  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorCompany, setErrorCompany] = useState('');
  const [errorList, setErrorList] = useState('');

  const handleInputChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value.trim()) {
      setErrorPassword('Password is required');
    } else {
      setErrorPassword('');
    }
  };

  const handleInputChangeCompany = (e) => {
    const value = e.target.value;
    setCompanyName(value);

    if (!value.trim()) {
      setErrorCompany('Company Name is required');
    } else {
      setErrorCompany('');
    }
  };

  const handleInputChangeList = (e) => {
    const value = e.target.value;
    setPositionsList(value);

    if (!value.trim()) {
      setErrorList('Companys List of positions is required');
    } else {
      setErrorList('');
    }
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleInputChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!isEmailValid(value)) {
      setErrorEmail('Please enter a valid email');
    } else {
      setErrorEmail('');
    }
  };







  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorPassword && !errorEmail && !errorCompany && !errorList) {

      try {
        const roles = positionsList.split(',').map(role => role.trim());

        const response = await fetch("http://localhost:4000/api/employers/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_name: companyName,
            roles,
            email,
            password
          }),
        });

        if (response.ok) {
          const data = await response.json();
          alert("Employer created successfully!");
          navigate("/login");
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message || 'An error occurred'}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert('Network error: ' + error.message);
      }
    }
  };




  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="mx-auto p-2">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-12">
            <label className="form-label">Company Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={handleInputChangeCompany}
            />
            {errorCompany && <div className="text-danger">{errorCompany}</div>}

          </div>
          <div className="col-md-6">
            <label className="form-label">Email address</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleInputChangeEmail}
            />
            {errorEmail && <div className="text-danger">{errorEmail}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChangePassword}
            />
            {errorPassword && <div className="text-danger">{errorPassword}</div>}

          </div>
          <div className="col-12">
            <label className="form-label">Positions List</label>
            <textarea
              className="form-control"
              placeholder="Enter company positions, separated by a comma"
              value={positionsList}
              onChange={handleInputChangeList}
            />
            {errorList && <div className="text-danger">{errorList}</div>}

          </div>
          <button type="submit" className="btn btn-primary mb-0">
            Submit Company Information
          </button>
          <button type="button" className="btn btn-secondary mb-3" onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
