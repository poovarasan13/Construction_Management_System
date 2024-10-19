import React, { useState, useEffect } from 'react';
import { useVendor } from '../VendorContext';

function VendorRequest() {
  const { fname } = useVendor();
  const [requests, setRequests] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      if (fname) {
        try {
          const response = await fetch(`http://localhost:3003/requests/${fname}`);

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching requests:', errorData.message);
            setErrorMessage(errorData.message);
            return;
          }

          const requestData = await response.json();
          setRequests(requestData.requests || []);
          setErrorMessage('');
        } catch (error) {
          console.error('Failed to fetch requests:', error);
          setErrorMessage('Failed to fetch requests. Please try again later.');
        }
      }
    };

    fetchRequests();
  }, [fname]);

  const handleAccept = async (requestId) => {
    try {
      const amount = window.prompt('Enter the amount to charge the customer (₹):');
      
      if (!amount || isNaN(amount) || amount <= 0) {
        setErrorMessage('Invalid amount entered.');
        return;
      }

      const response = await fetch(`http://localhost:3003/requests/accept/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount })
      });

      const data = await response.json();
      if (data.success) {
        setRequests((prevRequests) => 
          prevRequests.map(request => 
            request._id === requestId ? { ...request, accept: true, reject: false, amount } : request
          )
        );
      } else {
        console.error(data.message);
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error accepting request:', error);
      setErrorMessage('Failed to accept the request. Please try again later.');
    }
  };

  const handleReject = async (requestId) => {
    try {
      const response = await fetch(`http://localhost:3003/requests/reject/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data.success) {
        setRequests((prevRequests) => 
          prevRequests.map(request => 
            request._id === requestId ? { ...request, accept: false, reject: true } : request
          )
        );
      } else {
        console.error(data.message);
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error rejecting request:', error);
      setErrorMessage('Failed to reject the request. Please try again later.');
    }
  };

  return (
    <div className="col-12 pb-5">
      <div className="container-fluid mt-4 pb-5">
        <h2 className="mb-4">Vendor Requests</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {requests.length === 0 ? (
          <div className="alert alert-info" role="alert">
            No requests available.
          </div>
        ) : (
          <div className="row pb-5">
            {requests
              .filter(request => !request.display) // Only show requests where display is false
              .map((request, index) => (
                <div className="col-md-6 mb-3" key={index}>
                  <div className="card" style={{ width: "100%", border: "1px solid #007bff" }}>
                    <div className="card-body">
                      <h5 className="card-title">Name of Customer: {request.uname}</h5>
                      <p className="card-text"><strong>Message:</strong> {request.message}</p>
                      <p><strong>Customer Email:</strong> {request.uemail}</p>
                      <p><strong>Phone:</strong> {request.uphone}</p>
                      <p><strong>Service Date:</strong> {request.date}</p>
                      <p><strong>Type of Service:</strong> {request.type}</p>
                      <p><strong>Area:</strong> {request.area}</p>
                      <p><strong>Location:</strong> {request.place}</p>
  
                      {request.amount && <p><strong>Amount Charged:</strong> ₹{request.amount}</p>}
  
                      {/* Conditional rendering based on accept/reject status */}
                      {request.accept ? (
                        <p><p className="text-success">Request Accepted</p>
                        <p>Waiting for User Confirmation</p></p>
                      ) : request.reject ? (
                      <p className="text-danger">Request Rejected</p>
                       
                      ) : (
                        <div className="d-flex justify-content-between mt-3">
                          <button
                            className="btn btn-success"
                            onClick={() => handleAccept(request._id)}
                            disabled={request.accept || request.reject}
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleReject(request._id)}
                            disabled={request.accept || request.reject}
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
  
}

export default VendorRequest;
