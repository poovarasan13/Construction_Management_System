import React, { useState } from 'react';

import Swal from 'sweetalert2';

function ComplaintForm(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [complaint, setComplaint] = useState('');
  const [otherComplaint, setOtherComplaint] = useState('');
  const { v_name, company, type, email, setDisplayComplaint } = props;

  const backComplaint = () => {
    setDisplayComplaint(true);
  };

  const handleComplaint = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const finalComplaint = complaint === "Other" ? otherComplaint : complaint;

    try {
      const response = await fetch("http://localhost:3003/complaint", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, v_name, company, phone, email, type, complaint: finalComplaint, date }),
      });

      const data = await response.json();
      if (data.success) {
        Swal.fire({
          position: 'bottom-right',
          icon: 'success',
          title: 'Success',
          text: 'Complaint Sent Successfully',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
        });
        setDisplayComplaint(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row mt-4">
        <div className="col">
          <button className="btn btn-dark btn-sm ms-4" onClick={backComplaint}>
            <i className="bi bi-arrow-left"></i>
          </button>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4">Raise a Complaint</h3>
            <form onSubmit={handleComplaint}>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="date">Date of Incident</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label>Type of Complaint</label>
                <div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="complaint1"
                      name="complaint"
                      value="Poor Construction Quality"
                      checked={complaint === "Poor Construction Quality"}
                      onChange={(e) => {
                        setComplaint(e.target.value);
                        setOtherComplaint(''); // Clear other input
                      }}
                      required
                    />
                    <label className="form-check-label" htmlFor="complaint1">
                      Poor Construction Quality
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="complaint2"
                      name="complaint"
                      value="Delay in Project Completion"
                      checked={complaint === "Delay in Project Completion"}
                      onChange={(e) => {
                        setComplaint(e.target.value);
                        setOtherComplaint(''); // Clear other input
                      }}
                      required
                    />
                    <label className="form-check-label" htmlFor="complaint2">
                      Delay in Project Completion
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="complaint3"
                      name="complaint"
                      value="Safety Violations"
                      checked={complaint === "Safety Violations"}
                      onChange={(e) => {
                        setComplaint(e.target.value);
                        setOtherComplaint(''); // Clear other input
                      }}
                      required
                    />
                    <label className="form-check-label" htmlFor="complaint3">
                      Safety Violations
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="complaint4"
                      name="complaint"
                      value="Unprofessional Conduct"
                      checked={complaint === "Unprofessional Conduct"}
                      onChange={(e) => {
                        setComplaint(e.target.value);
                        setOtherComplaint(''); // Clear other input
                      }}
                      required
                    />
                    <label className="form-check-label" htmlFor="complaint4">
                      Unprofessional Conduct
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="complaintOther"
                      name="complaint"
                      value="Other"
                      checked={complaint === "Other"}
                      onChange={(e) => {
                        setComplaint(e.target.value);
                      }}
                      required
                    />
                    <label className="form-check-label" htmlFor="complaintOther">
                      Other
                    </label>
                  </div>
                  {complaint === "Other" && (
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Please specify"
                      value={otherComplaint}
                      onChange={(e) => setOtherComplaint(e.target.value)}
                    />
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col text-center">
                  <button type="submit" className="btn btn-success btn-lg">
                    Submit Complaint
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintForm;
