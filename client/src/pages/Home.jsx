
function Home() {
  return (
    <>
      <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">
        <div className="jumbotron text-center">
          <h1 className="display-4">Welcome to REC 2024!</h1>
          <p className="lead">Employee Dashboard Homepage! Feel free to sign up your company to organize your company today!</p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-primary btn-lg mb-1" href="/login" role="button">Log In</a>
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/register" role="button">Register</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Home