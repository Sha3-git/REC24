import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Employer() {
  const [sendOnboarding, setSendOnboarding] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [rank, setRank] = useState({});

  const handleRank = (id, rank) => {
    setRank(prev => ({ ...prev, [id]: rank }));
    promoteEmployee(id, rank);
    window.location.reload();
  };

  const promoteEmployee = async (id, rank) => {
    try {
      const response = await axios.put('http://localhost:4000/api/employers/promote', { id, role: rank });
      if (response.data.status === 200) {
        console.log("Employee promoted successfully.");
      } else {
        console.log("No employee found with that ID.");
      }
    } catch (error) {
      console.error("Error promoting employee:", error);
    }
  };

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  const updateOnboarding = () => setSendOnboarding(false);

  const user = JSON.parse(localStorage.getItem('user'));
  const roles = user.roles;


  useEffect(() => {
    console.log(user._id);
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/employers/getEmployeesByEmployerId/${user._id}`);
        const data = await response.json();
        if (response.ok) {
          setEmployees(data.data);
          console.log(employees);
        } else {
          console.error('Error fetching employees:', data.message);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, [user._id]);




  console.log(user);
  const handleSubmit = (e) => {
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
                  {employee.first_name} {employee.last_name}
                  <br></br>
                  {employee.role ? employee.role : "No role set."}
                  <br></br>
                  {employee.email}
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id={`dropdown-${employee._id}`}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Role
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={`dropdown-${employee._id}`}>
                      {roles.map(rank => (
                        <li key={rank}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleRank(employee._id, rank)}
                          >
                            {rank}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                    <input class="form-control" type="firstName" placeholder="First Name" value={first} onChange={(e) => { setFirst(e.target.value) }} />

                  </div>
                  <div className="col-md-6" >
                    <div class="form-label">Last Name</div>
                    <input class="form-control" type="lastName" placeholder="Last Name" value={last} onChange={(e) => { setLast(e.target.value) }} />
                  </div>

                  <div className="col-md-6"  >
                    <div class="form-label">Email address</div>
                    <input class="form-control" type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
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
