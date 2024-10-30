import React, { useState, useEffect } from 'react';
import { useVendor } from '../VendorContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function VendorRequest() {
  const { fname } = useVendor();
  const [requests, setRequests] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [amount, setAmount] = useState('');
  const [productValues, setProductValues] = useState([{ name: '' }]); // Initial state for product values

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

  const handleAccept = (requestId) => {
    setSelectedRequestId(requestId);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setAmount('');
    setProductValues([{ name: '', quantity: '' }]); // Reset product values
    setErrorMessage('');
  };

  const handleConfirmAccept = async () => {
    // Validate the amount
    if (!amount || isNaN(amount) || amount <= 0) {
      setErrorMessage('Invalid amount entered.');
      return;
    }

    // Filter out empty product fields
    const productsToSend = productValues.filter(product => product.name );

    if (productsToSend.length === 0) {
      setErrorMessage('Please enter at least one product.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3003/requests/accept/${selectedRequestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, products: productsToSend })
      });

      const data = await response.json();
      if (data.success) {
        setRequests((prevRequests) => 
          prevRequests.map(request => 
            request._id === selectedRequestId ? { ...request, accept: true, reject: false, amount, products: productsToSend } : request
          )
        );
        handleModalClose();
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
              .map((request) => (
                <div className="col-md-6 mb-3" key={request._id}>
                  <div className="card" style={{ width: "100%", border: "1px solid #007bff" }}>
                    <div className="card-body">
                      <h5 className="card-title">Name of Customer: {request.username}</h5>
                      <p className="card-text"><strong>Message:</strong> {request.message}</p>
                      <p><strong>Customer Email:</strong> {request.useremail}</p>
                      <p><strong>Phone:</strong> {request.userphone}</p>
                      <p><strong>Service Date:</strong> {request.date}</p>
                      <p><strong>Type of Service:</strong> {request.type}</p>
                      <p><strong>Specific Type in {request.type}:</strong> {request.type1}</p>
                      <p><strong>Area:</strong> {request.area}</p>
                      <p><strong>Location:</strong> {request.place}</p>
                      <p><strong>Requirements giveby {request.username}:</strong> {request.add_message}</p>
                      {request.price && (
                        <p><strong>Amount For Services:</strong> ₹{request.price * parseInt(request.area)}</p>
                      )}
                      {/* Conditional rendering based on accept/reject status */}
                      {request.accept ? (
                        <p><span className="text-success">Request Accepted</span>
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

      <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} onClick={handleModalClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}> {/* Prevent clicks on modal content from closing the modal */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Quotes</h5>
              <button type="button" className="close" onClick={handleModalClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Enter the amount for services:</p>
              <input
                type="number"
                className="form-control mb-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount (₹)"
              />
              
              <p>Materials Suggested for User:</p>
              {productValues.map((product, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={product.name}
                    onChange={(e) => {
                      const newProducts = [...productValues];
                      newProducts[index].name = e.target.value;
                      setProductValues(newProducts);
                    }}
                    placeholder="Product Name"
                  />
                  {/* <input
                    type="number"
                    className="form-control mt-1"
                    value={product.quantity}
                    onChange={(e) => {
                      const newProducts = [...productValues];
                      newProducts[index].quantity = e.target.value;
                      setProductValues(newProducts);
                    }}
                    placeholder="Quantity"
                  /> */}
                </div>
              ))}
              <div className='row justify-content-center'>
                <div className='col-4'>
                <button
                className="btn btn-warning btn-sm"
                onClick={() => setProductValues([...productValues, { name: '' }])}
              >
                 Add
              </button>
                </div>
              </div>


              {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleConfirmAccept}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show" onClick={handleModalClose}></div>}
    </div>
  );
}

export default VendorRequest;
