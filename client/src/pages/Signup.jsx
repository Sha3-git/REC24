


import axios from 'axios';
function Signup() {
    //guid based redirection
  return (
    <div 
    className="d-flex justify-content-center align-items-center vh-100"
  >
    <div className="p-5 bg-white shadow rounded" style={{ maxWidth: "500px"}}>
     
    <form class="row g-3">
    <p className="lead text-center">Welcome to the onboarding, enter your password to complete the registration</p>
    <div className="col-md-6" controlId="formBasicPassword">
      <div class="form-label">Password</div>
      <input class="form-control" type="password" placeholder="Password" />
    </div>
    <div className="col-md-6" controlId="formBasicPassword">
      <div class="form-label">Re-Enter Password</div>
      <input class="form-control" type="password" placeholder="Password" />
    </div>

    <button type="submit" class="btn btn-primary mb-3">Register for your company</button>
  </form>
  </div>
  </div>
  )
}

export default Signup