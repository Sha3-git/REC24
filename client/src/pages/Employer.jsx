import React, { useState } from 'react';

function Employer() {
  const [sendOnboarding, setSendOnboarding] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  const updateOnboarding = () => setSendOnboarding(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-5 bg-white shadow rounded" style={{ maxWidth: "500px" }}>
        <p className="lead">Welcome to your company name's dashboard!</p>
        
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-label">Positions Available</div>
            <div className="form-label">List positions</div>
          </div>
          
          <div className="col-md-6">
            <button type="button" className="btn btn-primary" onClick={openModal}>
              Register an Employee
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Send Employee Onboarding</h5>
              </div>
              <div className="modal-body">
              <input class="form-control" type="email" placeholder="Enter email" />
              <button type="button" className="btn btn-primary" onClick={updateOnboarding}>Send</button>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employer;
