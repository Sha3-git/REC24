import React, { useState , useEffect} from 'react';
import axios from 'axios';
function Employer() {
  const [sendOnboarding, setSendOnboarding] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  const updateOnboarding = () => setSendOnboarding(false);

  const user = JSON.parse(localStorage.getItem('user'));


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/employers/getEmployeesByEmployerId/${user.company_id}`);
        const data = await response.json();
        if (response.ok) {
          setEmployees(data.data);
        } else {
          console.error('Error fetching employees:', data.message);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, [user.company_id]);




  console.log(user);
  const handleSubmit = (e)=>{
    axios.post("http://localhost:4000/api/employers/create", {
      first_name: first,
      last_name: last,
      email: email,
      company_id: user._id 
    })
    setShowModal(false);
    setFirst('');
    setLast('');
    setEmail('');
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-5 bg-white shadow rounded" style={{ maxWidth: "500px" }}>
        <p className="lead">Welcome to your company name's dashboard!</p>

        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-label">Positions Available</div>
            <ul className="list-group">
              {employees.map(employee => (
                <li key={employee._id} className="list-group-item">
                  {employee.first_name} {employee.last_name} - {employee.email}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6">
            <button type="button" className="btn btn-primary" onClick={openModal}>
              Register an Employee
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal show d-flex justify-content-center align-items-center vh-100" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header justify-content-between">
                <h5 className="modal-title">Send Employee Onboarding</h5>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
              <div className="modal-body">
                <form class="row g-3">
                  <div className="col-md-6"  >
                    <div class="form-label">First Name</div>
                    <input class="form-control" type="firstName" placeholder="First Name" value={first} onChange={(e)=>{setFirst(e.target.value)}}/>

                  </div>
                  <div className="col-md-6" >
                    <div class="form-label">Last Name</div>
                    <input class="form-control" type="lastName" placeholder="Last Name" value={last} onChange={(e)=>{setLast(e.target.value)}}/>
                  </div>

                  <div className="col-md-6"  >
                    <div class="form-label">Email address</div>
                    <input class="form-control" type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>

                  <button type="button" class="btn btn-primary mb-3 " onClick={handleSubmit}>Register for your company</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employer;
