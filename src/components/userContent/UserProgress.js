import React, { useEffect, useState } from 'react';
import { useUser } from '../UserContext';
import ComplaintForm from './ComplaintForm';

function UserProgress() {
  const { username } = useUser();
  const [displayComplaint, setDisplayComplaint] = useState(true);
  const [progressRequests, setProgressRequests] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [details, setDetails] = useState(null);

  const raiseAComplaint = (request) => {
    setDisplayComplaint(false);
    setDetails(request); 
  };

  const fetchProgressRequests = async () => {
    if (username) {
      try {
        const response = await fetch(`http://localhost:3003/progress/${username}`);
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error fetching progress requests:', errorData.message);
          setErrorMessage(errorData.message);
          return;
        }

        const progressData = await response.json();
        const ongoingRequests = progressData.requests.filter(request => request.progress < 100);
        setProgressRequests(ongoingRequests || []);
        setErrorMessage('');
      } catch (error) {
        console.error('Failed to fetch progress requests:', error);
        setErrorMessage('Failed to fetch progress requests. Please try again later.');
      }
    }
  };

  useEffect(() => {
    console.log('Username:', username); 
    fetchProgressRequests();
  }, [username]);

  return (
    <div>
      <div className="col-12 pb-5">
        {displayComplaint && (
          <div className="container-fluid mt-4 pb-5">
            <h2 className="mb-4">Your Ongoing Progress</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {progressRequests.length > 0 ? (
              <div className="row pb-5">
                {progressRequests.map((request) => (
                  <div className="col-12 mb-3" key={request._id}>
                    <div className="card" style={{ width: '100%', border: '1px solid #007bff' }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <p><strong>Service Start Date:</strong> {request.date}</p>
                            <p><strong>Vendor Name:</strong> {request.v_name}</p>
                            <p><strong>Type of Service:</strong> {request.type}</p>
                            <p><strong>Specific Type in {request.type}:</strong> {request.type1}</p>

                            <p><strong>Area:</strong> {request.area} Square meter</p>
                            <p><strong>Location:</strong> {request.place}</p>
                            <p><strong>Price:</strong> ₹{request.amount}</p>
                            <p><strong>Progress:</strong> {request.progress}%</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-4'>
                            <div className='btn btn-sm btn-danger' onClick={() => raiseAComplaint(request)}>
                              Raise a Complaint
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="alert alert-info" role="alert">
                No ongoing progress requests available.
              </div>
            )}
          </div>
        )}
        
        {!displayComplaint && (
          <ComplaintForm 
              setDisplayComplaint={setDisplayComplaint}
              v_name={details.v_name} 
              company={details.company}
              type={details.type}
              email={details.uemail}
          />
        )}
      </div>
    </div>
  );
}

export default UserProgress;
