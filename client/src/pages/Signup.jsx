


import axios from 'axios';
function Signup() {
    //guid based redirection
  return (
    <div className="mx-auto p-2" >
    <form class="row g-3">
    <div className="col-md-6"  >
      <div class="form-label">First Name</div>
      <input class="form-control" type="firstName" placeholder="First Name" />

    </div>
    <div className="col-md-6" >
      <div class="form-label">Last Name</div>
      <input class="form-control" type="lastName" placeholder="Last Name" />
    </div>

     <div className="col-md-6"  >
      <div class="form-label">Email address</div>
      <input class="form-control" type="email" placeholder="Enter email" />

    </div>
    <div className="col-md-6" controlId="formBasicPassword">
      <div class="form-label">Password</div>
      <input class="form-control" type="password" placeholder="Password" />
    </div>

    <button type="submit" class="btn btn-primary mb-3">Register for your company</button>
  </form>
  </div>
  )
}

export default Signup