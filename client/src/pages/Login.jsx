function Login() {
  return (
      <div 
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="p-5 bg-white shadow rounded" style={{ maxWidth: "500px"}}>
       
      <form class="row g-3">
      <p className="lead text-center">Login to your account</p>
      <div className="col-md-6" controlId="formBasicPassword">
        <div class="form-label">Email</div>
        <input class="form-control" placeholder="Email" />
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

export default Login