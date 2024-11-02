import React, { useEffect, useState } from 'react';

async function fetchCompanyName(employerId) {
    try {
        const response = await fetch(`http://localhost:4000/api/employers/getEmployerById/${employerId}`);
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        if (result.status === 200 && result.data) {
            return result.data.company_name; 
        } else {
            console.error("Employer data not found.");
            return null; 
        }
    } catch (error) {
        console.error("Error fetching company name:", error);
        return null; 
    }
}

function Employee() {
    const userData = JSON.parse(localStorage.getItem('user'));
    const [companyName, setCompanyName] = useState(null);

    useEffect(() => {
        const employerId = userData.company_id;
        fetchCompanyName(employerId).then(name => {
            setCompanyName(name); 
        });
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-5 bg-white shadow rounded" style={{ maxWidth: "500px" }}>
                <p className="lead">Hello, {userData.first_name} {userData.last_name}!</p>
                {userData.role ?
                    <p className="lead">Your current position is: {userData.role}</p>
                    :
                    <p className="lead">You have not been assigned a role yet.</p>
                }
                <p className="lead">At: {companyName ? companyName : 'Loading...'}</p> 
            </div>
        </div>
    );
}

export default Employee;
