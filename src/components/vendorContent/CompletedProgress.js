import React, { useEffect, useState } from 'react';
import { useVendor } from '../VendorContext';

function CompletedProgress() {
  const { fname } = useVendor();
  const [completedRequests, setCompletedRequests] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchCompletedRequests = async () => {
    if (fname) {
      try {
        const response = await fetch(`http://localhost:3003/progresss/${fname}`);
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error fetching completed requests:', errorData.message);
          setErrorMessage(errorData.message);
          return;
        }

        const progressData = await response.json();
        const completed = progressData.requests.filter(request => request.progress >= 100);
        setCompletedRequests(completed || []);
        setErrorMessage('');
      } catch (error) {
        console.error('Failed to fetch completed requests:', error);
        setErrorMessage('Failed to fetch completed requests. Please try again later.');
      }
    }
  };

  useEffect(() => {
    fetchCompletedRequests();
  }, [fname]);

  return (
    <div>
      <div className="col-12 pb-5">
        <div className="container-fluid mt-4 pb-5">
          <h2 className="mb-4">Completed Progress List</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {completedRequests.length > 0 ? (
            <div className="row pb-5">
              {completedRequests.map((request) => (
                <div className="col-12 mb-3" key={request._id}>
                  <div
                    className="card"
                    style={{
                      width: '100%',
                      border: '1px solid #28a745',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <p><strong>Customer Name:</strong> {request.username}</p>
                          <p><strong>Service Start Date:</strong> {request.date}</p>
                          <p><strong>Type of Service:</strong> {request.type}</p>
                          <p><strong>Area:</strong> {request.area}</p>
                          <p><strong>Location:</strong> {request.place}</p>
                          <p><strong>Price:</strong> ₹{request.amount}</p>
                          <p><strong>Progress:</strong> {request.progress === 100 ? 'Progress Completed' : `${request.progress}%`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info" role="alert">
              No completed progress requests available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompletedProgress;
