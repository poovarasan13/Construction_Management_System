import React, { useEffect, useState } from 'react';
import { useUser } from '../UserContext';

function UserRequest() {
  const { username } = useUser();
  const [requests, setRequests] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

 
  const handleAcceptRequest = async (request) => {
    console.log('Request ID:', request._id); 
    try {
        const progressResponse = await fetch('http://localhost:3003/progress/accept', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                username: request.username,
                useremail: request.useremail,
                userphone: request.userphone,
                date: request.date,
                area: request.area,
                v_name: request.v_name,
                type: request.type,
                type1:request.type1,
                place: request.place,
                amount: request.amount,
                progress: 0,  
            }),
        });

        if (progressResponse.ok) {
            const progressData = await progressResponse.json();
            console.log('Request accepted and added to progress:', progressData);
            
            // Update display field after adding to progress
            const displayResponse = await fetch(`http://localhost:3003/user_request/display/${request._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ display: true }),
            });

            if (displayResponse.ok) {
                const displayData = await displayResponse.json();
                console.log('Display field updated successfully:', displayData);
            } else {
                console.error('Error updating display field in user_request');
            }

            fetchRequests(); 
        } else {
            console.error('Error accepting request');
        }
    } catch (error) {
        console.error('Error handling accept:', error);
    }
};


 
const handleRejectRequest = async (request) => {
  try {
    const response = await fetch('http://localhost:3003/progress/reject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:request.username,
        uname: request.uname,
        uemail: request.uemail,
        uphone: request.uphone,
        date: request.date,
        area: request.area,
        v_name: username, 
        type: request.type,
        place: request.place,
      }),
    });

    if (response.ok) {
      console.log('Request rejected and added to progress:', await response.json());

    
      const displayResponse = await fetch(`http://localhost:3003/user_request/display/${request._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          display: true, 
         
        }),
      });

      if (displayResponse.ok) {
        const displayData = await displayResponse.json();
        console.log('Display field updated successfully:', displayData);
      } else {
        console.error('Error updating display field in user_request');
      }

      fetchRequests(); 
    } else {
      console.error('Error rejecting request');
    }
  } catch (error) {
    console.error('Error handling reject:', error);
  }
};


  const fetchRequests = async () => {
    if (username) {
      try {
        const response = await fetch(`http://localhost:3003/request/${username}`);

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

   useEffect(() => {
    fetchRequests();
  }, [username]);

  return (
    <div>
      <div className="col-12 pb-5">
        <div className="container-fluid mt-4 pb-5">
          <h2 className="mb-4">User Requests</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {requests.length > 0 ? (
            <div className="row pb-5">
              {requests
                .filter(request => !request.display) 
                .map((request, index) => (
                  <div className="col-12 mb-3" key={index}>
                    <div
                      className="card"
                      style={{
                        width: '100%',
                        border: '1px solid #007bff',
                        backgroundColor: request.accept ? 'lightgreen' : request.reject ? 'lightcoral' : 'white',
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Name of Vendor: {request.v_name}</h5>
                        <p className="card-text">
                          <strong>Message:</strong> {request.message}
                        </p>

                        <div className="row">
                          <div className="col">
                            <p>
                              <strong>Service Date:</strong> {request.date}
                            </p>
                            <p>
                              <strong>Type of Service:</strong> {request.type}
                            </p>
                            <p>
                              <strong>Specific Type in {request.type}:</strong> {request.type1}
                            </p>
                            {request.products && request.products.length > 0 && (
                    <div>
                      <strong>Suggested Products From Vendor:</strong>
                      <ul>
                        {request.products.map((product, productIndex) => (
                          <li key={productIndex}>
                            {product.name}

                            {product.quantity && ` (Quantity: ${product.quantity})`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                            <p>
                              <strong>Area:</strong> {request.area}
                            </p>
                            <p>
                              <strong>Location:</strong> {request.place}
                            </p>
                            {!request.accept && !request.reject && (
                          <div className="mt-3">
                            <h4 className="text-dark mt-3">Status: Pending</h4>
                          </div>
                        )}

                          </div>
                        </div>


                      
                        {request.accept && (
                          <div className="mt-3">
                            <h4 className="text-success">Status: Accepted</h4>
                            <p>
                              <strong>Price:</strong> ₹{request.amount}
                            </p>
                            <div className="d-flex justify-content-start mt-3">
                            <button
                              className="btn btn-success me-3"
                              onClick={() => handleAcceptRequest(request)}
                            >
                              Accept
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleRejectRequest(request)}
                            >
                              Reject
                            </button>
                          </div>
                          </div>
                        )}

                   
                        {request.reject && (
                          <h4 className="text-danger mt-3">Status: Rejected</h4>
                        )}

                       
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="alert alert-info" role="alert">
              No requests available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserRequest;
