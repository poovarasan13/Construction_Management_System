import React, { useEffect, useState } from 'react';
import { useVendor } from '../VendorContext';
import Swal from 'sweetalert2';

function VendorProgress() {
  const { fname } = useVendor(); 
  const [progressRequests, setProgressRequests] = useState([]); 
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProgressRequests = async () => {
    if (fname) {
      try {
        const response = await fetch(`http://localhost:3003/progresss/${fname}`);
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error fetching progress requests:', errorData.message);
          setErrorMessage(errorData.message);
          return;
        }

        const progressData = await response.json(); 
        setProgressRequests(progressData.requests || []); 
        setErrorMessage(''); 
      } catch (error) {
        console.error('Failed to fetch progress requests:', error);
        setErrorMessage('Failed to fetch progress requests. Please try again later.'); 
      }
    }
  };

  const updateProgress = async (requestId, newProgress) => {
    try {
      const response = await fetch(`http://localhost:3003/progress/update/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ progress: newProgress }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error updating progress:', errorData.message);
        setErrorMessage(errorData.message);
        return;
      }

      Swal.fire({
        position: 'bottom-right',
        icon: 'success',
        title: 'Progress updated successfully!',
        toast: true,
        showConfirmButton: false,
        timer: 1500
      });

      // Refresh progress requests after successful update
      fetchProgressRequests();
    } catch (error) {
      console.error('Failed to update progress:', error);
      setErrorMessage('Failed to update progress. Please try again later.'); 
    }
  };

  useEffect(() => {
    fetchProgressRequests(); 
  }, [fname]); 
  
  const incompleteRequests = progressRequests.filter(request => request.progress < 100);

  return (
    <div>
      <div className="col-12 pb-5">
        <div className="container-fluid mt-4 pb-5">
          <h2 className="mb-4">Progress List</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {incompleteRequests.length > 0 ? (
            <div className="row pb-5">
              {incompleteRequests.map((request) => (
                <div className="col-12 mb-3" key={request._id}>
                  <div
                    className="card"
                    style={{
                      width: '100%',
                      border: '1px solid #007bff',
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
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col'>
                          <strong>Progress:</strong>
                          <input 
                            type='number' 
                            min='0' 
                            max='100' 
                            defaultValue={request.progress || 0} 
                            id={`progress-${request._id}`} 
                            style={{ width: '60px' }}
                          />
                          <span>%</span>
                          <button 
                            className="btn btn-primary ml-2 btn-sm" 
                            onClick={() => {
                              const newProgress = Number(document.getElementById(`progress-${request._id}`).value);
                              updateProgress(request._id, newProgress);
                            }}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info" role="alert">
              No progress requests available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VendorProgress;
