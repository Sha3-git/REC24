import React, { useState } from 'react';
import axios from 'axios';

function Signup() {

  const [inputPassword, setInputPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('Password is required');

  const [inputCheck, setInputCheck] = useState('');
  const [errorCheck, setErrorCheck] = useState('Passwords do not match');

  const handleInputChange1 = (e) => {
    const value = e.target.value;
    setInputPassword(value);
    
    if (!value.trim()) {
      setErrorPassword('Password is required');
    } else {
      setErrorPassword('');
    }
  };

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    setInputCheck(value);
    
    if (value !== inputPassword) {
      setErrorCheck('Passwords do not match');
    } else {
      setErrorCheck('');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorPassword && !errorCheck) {
    }
  };



  return (
    <div 
    className="d-flex justify-content-center align-items-center vh-100"
  >
    <div className="p-5 bg-white shadow rounded" style={{ maxWidth: "500px"}}>
     
    <form class="row g-3" onSubmit={handleSubmit}>
    <p className="lead text-center">Welcome to the onboarding, enter your password to complete the registration</p>
    <div className="col-md-6">
            <label className="form-label">Password</label>
            <input 
              className="form-control" 
              type="password" 
              placeholder="Password" 
              value={inputPassword} 
              onChange={handleInputChange1} 
            />
            {errorPassword && <div className="text-danger">{errorPassword}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Re-Enter Password</label>
            <input 
              className="form-control" 
              type="password" 
              placeholder="Re-enter Password" 
              value={inputCheck} 
              onChange={handleInputChange2} 
            />
            {errorCheck && <div className="text-danger">{errorCheck}</div>}
          </div>

    <button type="submit" class="btn btn-primary mb-3">Register for your company</button>
  </form>
  </div>
  </div>
  )
}

export default Signup