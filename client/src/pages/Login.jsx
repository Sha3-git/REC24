import axios from 'axios';
import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e)=>{
        axios.post("http://localhost:4000/api/employees/login",{
            email: email,
            password:password
        })
    }
  return (
      <div 
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="p-5 bg-white shadow rounded" style={{ maxWidth: "500px"}}>
       
      <form class="row g-3">
      <p className="lead text-center">Login to your account</p>
      <div className="col-md-6" controlId="formBasicPassword">
        <div class="form-label">Email</div>
        <input class="form-control" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="col-md-6" controlId="formBasicPassword">
        <div class="form-label">Re-Enter Password</div>
        <input class="form-control" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
  
      <button type="button" class="btn btn-primary mb-3" onClick={handleSubmit}>Login</button>
    </form>
    </div>
    </div>
  )
}

export default Login