import Header from "../components/Header"

function Register() {

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