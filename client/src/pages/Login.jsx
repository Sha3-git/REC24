import axios from "axios";
import { useState } from "react";

function Login() {

    const [inputPassword, setInputPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('Password is required');

    const [inputEmail, setInputEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('Please enter a valid email');

    const handleInputChangePassword = (e) => {
        const value = e.target.value;
        setInputPassword(value);

        if (!value.trim()) {
            setErrorPassword('Password is required');
        } else {
            setErrorPassword('');
        }
    };
    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleInputChangeEmail = (e) => {
        const value = e.target.value;
        setInputEmail(value);

        if (!isEmailValid(value)) {
            setErrorEmail('Please enter a valid email');
        } else {
            setErrorEmail('');
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:4000/api/login/login',
            {
                email: inputEmail,
                password: inputPassword,
            }
        )
        const data = response.data;
        localStorage.setItem('userType', JSON.stringify(response.data.userType));
        localStorage.setItem('user', JSON.stringify(response.data.data));
        if (response.data.userType === 'employee') {
          window.location.href = '/employee'; 
      } else if (response.data.userType === 'employer') {
          window.location.href = '/employer'; 
      }
    };



    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
        >
            <div className="p-5 bg-white shadow rounded" style={{ maxWidth: "500px" }}>

                <form className="row g-3" onSubmit={handleSubmit}>
                    <p className="lead text-center">Login to your account</p>
                    <div className="col-md-6" >
                        <div className="form-label">Email</div>
                        <input className="form-control" placeholder="Email" value={inputEmail}
                            onChange={handleInputChangeEmail}
                        />
                        {errorEmail && <div className="text-danger">{errorEmail}</div>}

                    </div>
                    <div className="col-md-6" >
                        <div className="form-label">Password</div>
                        <input className="form-control" type="password" placeholder="Password" value={inputPassword} onChange={handleInputChangePassword} />
                        {errorPassword && <div className="text-danger">{errorPassword}</div>}

                    </div>

                    <button type="button" className="btn btn-primary mb-3" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login